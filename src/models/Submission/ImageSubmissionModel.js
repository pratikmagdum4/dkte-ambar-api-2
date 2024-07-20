import mongoose from "mongoose";

const imageSubmissionSchema = new mongoose.Schema({
  stdname: { type: String, default: "" },
  contact: { type: String, default: "" },
  email: { type: String, default: "" },
  prn: { type: String, default: "" },
  branch: { type: String, default: "" },
  year: { type: String, default: "" },
  title: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  
});

const ImageSubmissionSchema = mongoose.model(
  "ImageSubmissionSchema",
  imageSubmissionSchema
);

export default ImageSubmissionSchema;
