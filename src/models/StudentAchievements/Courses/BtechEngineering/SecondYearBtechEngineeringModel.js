import mongoose from "mongoose";

const SecondYearBtechEngineeringSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const SecondYearBtechEngineeringModel = mongoose.model(
  "SecondYearBtechEngineeringModel",
  SecondYearBtechEngineeringSchema
);
export default SecondYearBtechEngineeringModel;
