import mongoose from "mongoose";

const diplomaSecondYearSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  percentage: { type: String, default: "" },
});

const DiplomaSecondYearModel = mongoose.model(
  "DiplomaSecondYearModel",
  diplomaSecondYearSchema
);
export default DiplomaSecondYearModel;
