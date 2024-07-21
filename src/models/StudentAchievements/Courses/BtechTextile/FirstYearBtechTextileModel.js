import mongoose from "mongoose";

const firstYearBtechTextileSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const FirstYearBtechTextileModel = mongoose.model(
  "FirstYearBtechTextileModel",
  firstYearBtechTextileSchema
);
export default FirstYearBtechTextileModel;
