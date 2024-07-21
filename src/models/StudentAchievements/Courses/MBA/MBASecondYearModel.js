import mongoose from "mongoose";

const mbaSecondYearSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const MBASecondYearModel = mongoose.model(
  "MBSecondYearModel",
  mbaSecondYearSchema
);
export default MBASecondYearModel;
