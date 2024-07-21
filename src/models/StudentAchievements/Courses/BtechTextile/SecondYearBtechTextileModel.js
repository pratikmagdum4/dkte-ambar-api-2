import mongoose from "mongoose";

const secondYearBtechTextileSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const SecondYearBtechTextileModel = mongoose.model(
  "SecondYearBtechTextileModel",
  secondYearBtechTextileSchema
);
export default SecondYearBtechTextileModel;
