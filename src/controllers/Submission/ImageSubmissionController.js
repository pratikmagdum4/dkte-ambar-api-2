import {
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import ImageSubmissionSchema from "../../models/Submission/ImageSubmissionModel.js";
import dotenv from "dotenv";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
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
    console.log("The error is ",error)
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
    const { imageType } = req.query;
    const images = await ImageSubmissionSchema.find({
      isVerified: true,
      imageType: imageType ? imageType : { $exists: true },
    });
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

// New function to delete an image by ID
const deleteImageById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the image submission in the database
    const imageSubmission = await ImageSubmissionSchema.findById(id);
    if (!imageSubmission) {
      return res.status(404).json({ message: "Image submission not found" });
    }

    // Delete the images from S3
    const deleteImageFromS3 = async (imageUrl) => {
      if (!imageUrl) return;

      const key = imageUrl.split("/").pop(); // Extract the S3 key from the URL
      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      });

      try {
        await s3.send(deleteCommand);
      } catch (error) {
        console.error("Error deleting image from S3:", error);
        throw new Error("Error deleting image from S3");
      }
    };

    await deleteImageFromS3(imageSubmission.imageUrl);
    await deleteImageFromS3(imageSubmission.selfImage);

    // Delete the submission from the database
    await ImageSubmissionSchema.findByIdAndDelete(id);

    res.status(200).json({ message: "Image submission deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image submission", error });
  }
};

export {
  CreateImageSubmission,
  getImgUploads,
  getVerifiedImageByType,
  UpdateImageVerification,
  deleteImageById, // Export the new delete function
};
