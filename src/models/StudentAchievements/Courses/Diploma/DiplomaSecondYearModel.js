import mongoose from "mongoose";

const { Schema } = mongoose;

const secondYearDiplomaSchema = new Schema({
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

const SecondYearDiplomaModel = mongoose.model(
  "SecondYearDiplomaModel",
  secondYearDiplomaSchema
);

export default SecondYearDiplomaModel;
