import mongoose from "mongoose";

const mbaFirstYearSchema = new mongoose.Schema({
  rank: { type: String, default: "" },
  stdname: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

const MBAFirstYearModel = mongoose.model(
  "MBAFirstYearModel",
  mbaFirstYearSchema
);
export default MBAFirstYearModel;
