import mongoose from "mongoose";

const diplomaFirstYearSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  percentage: { type: String, default: "" },
});

const DiplomaFirstYearModel = mongoose.model(
  "DiplomaFirstYearModel",
  diplomaFirstYearSchema
);
export default DiplomaFirstYearModel;
