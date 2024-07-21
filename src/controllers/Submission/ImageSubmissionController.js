import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import ImageSubmissionSchema from "../../models/Submission/ImageSubmissionModel.js";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const CreateImageSubmission = async (req, res) => {
  const {
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    isVerified,
    imageType,
  } = req.body;
  const imageUrl = req.files["image"] ? req.files["image"][0].location : null;
  const selfImage = req.files["selfImage"]
    ? req.files["selfImage"][0].location
    : null;

  const newForm = new ImageSubmissionSchema({
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    imageUrl,
    selfImage,
    isVerified,
    imageType,
  });

  try {
    await newForm.save();

    // Generate signed URLs for the uploaded images
    const signedUrls = {};

    if (req.files["image"]) {
      const imageKey = req.files["image"][0].key;
      const imageCommand = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: imageKey,
      });
      signedUrls.image = await getSignedUrl(s3, imageCommand, {
        expiresIn: 3600,
      });
    }

    if (req.files["selfImage"]) {
      const selfImageKey = req.files["selfImage"][0].key;
      const selfImageCommand = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: selfImageKey,
      });
      signedUrls.selfImage = await getSignedUrl(s3, selfImageCommand, {
        expiresIn: 3600,
      });
    }

    res.status(200).json({
      message: "Form submitted successfully",
      newForm,
      signedUrls,
    });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error });
  }
};


const getImgUploads = async (req, res) => {
  try {
    
    const imgUploads = await ImageSubmissionSchema.find();
    res.json(imgUploads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVerifiedImageByType = async (req, res) => {
  try {
    console.log("hi i mhere offcourse")
    const { imageType } = req.query;
    console.log("the image type is ", imageType);
    const images = await ImageSubmissionSchema.find({
      isVerified: true,
      imageType: imageType ? imageType : { $exists: true },
    });
    console.log("the iamgesare ar",images);
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const UpdateImageVerification = async (req, res) => {
  const { id } = req.params;
  const { isVerified } = req.body;

  try {
    const article = await ImageSubmissionSchema.findByIdAndUpdate(
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

// const getVerifiedImages = async (req, res) => {
//   try {
//     console.log("here i m in teach");
//     const { language } = req.query;
//     const articles = await TechnicalSubmissionSchema.find({
//       isVerified: true,
//       language: language ? language : { $exists: true },
//     });
//     console.log("The articles are ", articles);
//     res.json(articles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export {
  CreateImageSubmission,
  getImgUploads,
  getVerifiedImageByType,
  UpdateImageVerification,
  
};

