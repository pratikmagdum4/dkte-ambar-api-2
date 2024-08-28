import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import TechnicalSubmissionSchema from "../../models/Submission/TechnicalArticalSubmission.js";
import dotenv from "dotenv";
import libre from "libreoffice-convert";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";
import { pipeline } from "stream";
import { promisify } from "util";
// Get the current file and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const streamPipeline = promisify(pipeline);

const downloadFromS3 = async (bucket, key, downloadPath) => {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  const { Body } = await s3.send(command);
  await streamPipeline(Body, fs.createWriteStream(downloadPath));
};

const convertDocToPdf = async (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    try {
      const ext = ".pdf";
      const input = fs.readFileSync(inputPath);

      libre.convert(input, ext, undefined, (err, done) => {
        if (err) {
          console.error(`Error converting file: ${err}`);
          reject(err);
          return;
        }

        fs.writeFileSync(outputPath, done);
        resolve(outputPath);
      });
    } catch (error) {
      console.error("Error in convertDocToPdf:", error);
      reject(error);
    }
  });
};

const uploadTos3 = async (filePath, bucketName) => {
  const fileStream = fs.createReadStream(filePath);
  const uploadParams = {
    Bucket: bucketName,
    Key: `pdf/${uuidv4()}.pdf`,
    Body: fileStream,
    ContentType: "application/pdf",
  };

  try {
    const command = new PutObjectCommand(uploadParams);
    await s3.send(command);
    const pdfUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${uploadParams.Key}`;
    return pdfUrl;
  } catch (error) {
    console.error("Error uploading PDF to S3:", error);
    throw new Error("Error uploading PDF to S3");
  }
};

const CreateTechArticleSubmission = async (req, res) => {
  let {
    stdname,
    contact,
    email,
    language,
    prn,
    branch,
    year,
    title,
    isVerified,
  } = req.body;

  const content = req.files["content"]
    ? req.files["content"][0].location
    : null;
  const contentPdf = req.files["contentPdf"]
    ? req.files["contentPdf"][0].location
    : null;
  const selfImage = req.files["selfImage"]
    ? req.files["selfImage"][0].location
    : null;
console.log("Selfimagei s",selfImage);
  try {
    // No conversion here; just save the file info to the database
    const newForm = new TechnicalSubmissionSchema({
      stdname,
      contact,
      email,
      prn,
      branch,
      year,
      title,
      content, // Save the original Word document URL
      contentPdf, // Optionally leave this null for now
      language,
      selfImage,
      isVerified,
    });

    await newForm.save();

    // Return the URL of the Word document so the frontend can download and convert it
    res.status(200).json({
      message: "Form submitted successfully",
      newForm,
      wordFileUrl: content, // Send the Word document URL to the frontend
      PdfFileUrl: contentPdf, 
      selfImageUrl: selfImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting form", error });
  }
};
const getTechArticles = async (req, res) => {
  try {
    const articles = await TechnicalSubmissionSchema.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const UpdateTechArticleVerification = async (req, res) => {
  const { id } = req.params;
  const { isVerified } = req.body;

  try {
    const article = await TechnicalSubmissionSchema.findByIdAndUpdate(
      id,
      { isVerified },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};

const getVerifiedTechArticle = async (req, res) => {
  try {
    const { language } = req.query;
    const articles = await TechnicalSubmissionSchema.find({
      isVerified: true,
      language: language ? language : { $exists: true },
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTechnicalArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await TechnicalSubmissionSchema.findById(id);

    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }

    // Deleting associated S3 object
    const deletePromises = [];
    if (article.content) {
      const s3Key = article.content.split("/").pop(); // Ensure .pop() is a function

      try {
        deletePromises.push(
          s3.send(
            new DeleteObjectCommand({
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: s3Key,
            })
          )
        );
        await Promise.all(deletePromises);
      } catch (s3Error) {
        console.error("Error deleting S3 object:", s3Error);
        return res.status(500).json({ message: "Error deleting S3 object" });
      }
    }

    // Deleting the article from the database
    await TechnicalSubmissionSchema.deleteOne({ _id: id }); // Using deleteOne() method

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);

    if (error.code === "ECONNRESET") {
      return res.status(500).json({
        message: "Network error while deleting article. Please try again.",
      });
    }

    res.status(500).json({ message: "Error deleting article" });
  }
};

export {
  CreateTechArticleSubmission,
  getTechArticles,
  UpdateTechArticleVerification,
  getVerifiedTechArticle,
  deleteTechnicalArticle,
};
