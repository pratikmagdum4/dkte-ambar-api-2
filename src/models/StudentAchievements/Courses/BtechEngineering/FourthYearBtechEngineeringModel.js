import mongoose from "mongoose";

const fourthYearBtechEngineeringSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const FirstYearBtechEngineeringModel = mongoose.model(
  "FirstYearBtechEngineeringModel",
  fourthYearBtechEngineeringSchema
);
export default FirstYearBtechEngineeringModel;
