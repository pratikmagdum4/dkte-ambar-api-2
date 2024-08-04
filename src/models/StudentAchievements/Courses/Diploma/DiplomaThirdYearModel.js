import mongoose from "mongoose";

const { Schema } = mongoose;

const thirdYearDiplomaSchema = new Schema({
  rank: {
    type: Number,
    required: false,
  },
  stdname: {
    type: String,
    required: false,
  },
  cgpa: {
    type: String,
    required: false,
  },
  dept: {
    type: String,
    required: true,
  },
});

const ThirdYearDiplomaModel = mongoose.model(
  "ThirdYearDiplomaModel",
  thirdYearDiplomaSchema
);

export default ThirdYearDiplomaModel;
