import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
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
  const { stdname, contact, email, prn, branch, year, title,content, } = req.body;
  const selfImage = req.file.location;

  const newForm = new ArticleSubmissionSchema({
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    content,
    selfImage,
  });

  try {
    await newForm.save();

    // Generate a signed URL for the uploaded image
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.file.key,
    });
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // URL expires in 1 hour

    res
      .status(200)
      .json({ message: "Form submitted successfully", newForm, signedUrl });
  } catch (error) {
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
}

export { CreateArticleSubmission, getArticles };
