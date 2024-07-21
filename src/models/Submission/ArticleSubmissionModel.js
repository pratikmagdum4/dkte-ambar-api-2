import mongoose from "mongoose";

const articleSubmissionSchema = new mongoose.Schema({
  stdname: { type: String, default: "" },
  language: { type: String, default: "" },
  contact: { type: String, default: "" },
  email: { type: String, default: "" },
  prn: { type: String, default: "" },
  branch: { type: String, default: "" },
  year: { type: String, default: "" },
  title: { type: String, default: "" },
  content: { type: String, default: "" },
  selfImage: { type: String, default: "" },
  isVerified: {type: Boolean, default: false}
});

const ArticleSubmissionSchema = mongoose.model(
  "ArticleSubmissionSchema",
  articleSubmissionSchema
);

export default ArticleSubmissionSchema;
