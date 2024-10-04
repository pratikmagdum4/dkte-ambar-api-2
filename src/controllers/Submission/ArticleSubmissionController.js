import { S3Client, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import ArticleSubmissionSchema from "../../models/Submission/ArticleSubmissionModel.js";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const CreateArticleSubmission = async (req, res) => {
  const {
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    language,
    isVerified,
    articleType,
  } = req.body;

  let content = req.files["content"]
    ? req.files["content"][0].location
    : null;
  let contentPdf = req.files["contentPdf"]
    ? req.files["contentPdf"][0].location
    : null;
  const selfImage = req.files["selfImage"]
    ? req.files["selfImage"][0].location
    : null;
 if (content && content.endsWith(".docx")) {
   content = `https://docs.google.com/viewer?url=${content}`;
 }
  const newForm = new ArticleSubmissionSchema({
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    content,
    contentPdf,
    selfImage,
    language,
    isVerified,
    articleType,
  });

  try {
    await newForm.save();

    // Check if req.file and req.file.key are defined
    if (req.file && req.file.key) {
      // Generate a signed URL for the uploaded image
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: req.file.key,
      });

      const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // URL expires in 1 hour
      res
        .status(200)
        .json({ message: "Form submitted successfully", newForm, signedUrl });
    } else {
      res.status(200).json({ message: "Form submitted successfully", newForm });
    }
  } catch (error) {
    console.log("the error is ", error);
    res.status(500).json({ message: "Error submitting form", error });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await ArticleSubmissionSchema.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const UpdateArticleVerification = async (req, res) => {
  const { id } = req.params;
  const { isVerified } = req.body;

  try {
    const article = await ArticleSubmissionSchema.findByIdAndUpdate(
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

const getVerifiedArticle = async (req, res) => {
  try {
    const { language } = req.query;
    const articles = await ArticleSubmissionSchema.find({
      isVerified: true,
      language: language ? language : { $exists: true },
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;
  console.log("The id is ", id);
  try {
    const article = await ArticleSubmissionSchema.findById(id);
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }

    // Deleting associated S3 object
    const deletePromises = [];
    if (article.content) {
      deletePromises.push(
        s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: article.content.split("/").pop(), // Ensure .pop() is a function
          })
        )
      );
    }

    await Promise.all(deletePromises);

    // Deleting the article from the database
    await ArticleSubmissionSchema.deleteOne({ _id: id }); // Using deleteOne() method

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting article" });
  }
};

export {
  CreateArticleSubmission,
  getArticles,
  UpdateArticleVerification,
  getVerifiedArticle,
  deleteArticle,
};
