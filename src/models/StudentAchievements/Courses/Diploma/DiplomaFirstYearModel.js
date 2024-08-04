import mongoose from "mongoose";

const { Schema } = mongoose;

const firstYearDiplomaSchema = new Schema({
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

const FirstYearDiplomaModel = mongoose.model(
  "FirstYearDiplomaModel",
  firstYearDiplomaSchema
);

export default FirstYearDiplomaModel;
