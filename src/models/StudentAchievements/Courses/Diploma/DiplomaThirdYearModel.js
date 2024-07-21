import mongoose from "mongoose";

const diplomaThirdYearSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  percentage: { type: String, default: "" },
});

const DiplomaThirdYearModel = mongoose.model(
  "DiplomaThirdYearModel",
  diplomaThirdYearSchema
);
export default DiplomaThirdYearModel;
