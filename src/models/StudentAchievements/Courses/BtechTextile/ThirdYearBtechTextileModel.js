import mongoose from "mongoose";

const thirdYearBtechTextileSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const ThirdYearBtechTextileModel = mongoose.model(
  "ThirdYearBtechTextileModel",
  thirdYearBtechTextileSchema
);
export default ThirdYearBtechTextileModel;
