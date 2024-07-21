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
  const { stdname, contact, email, prn, branch, year, title } = req.body;
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
    console.log(" i mh erer")
    const imgUploads = await ImageSubmissionSchema.find();
    res.json(imgUploads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { CreateImageSubmission, getImgUploads };

