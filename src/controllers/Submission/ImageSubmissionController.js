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
  const imageUrl = req.file.location;

  const newForm = new ImageSubmissionSchema({
    stdname,
    contact,
    email,
    prn,
    branch,
    year,
    title,
    imageUrl,
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

export { CreateImageSubmission };
