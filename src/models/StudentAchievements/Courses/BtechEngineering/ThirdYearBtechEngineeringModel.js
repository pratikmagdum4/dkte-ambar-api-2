import mongoose from "mongoose";

const thirdYearBtechEngineeringSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const ThirdYearBtechEngineeringModel = mongoose.model(
  "ThirdYearBtechEngineeringModel",
  thirdYearBtechEngineeringSchema
);
export default ThirdYearBtechEngineeringModel;
