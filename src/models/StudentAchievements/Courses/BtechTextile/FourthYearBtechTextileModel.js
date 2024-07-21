import mongoose from "mongoose";

const fourthYearBtechTextileSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const FourthYearBtechTextileModel = mongoose.model(
  "FirstYearBtechTextileModel",
  fourthYearBtechTextileSchema
);
export default FourthYearBtechTextileModel;
