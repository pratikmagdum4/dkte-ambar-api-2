import mongoose from "mongoose";

const { Schema } = mongoose;

const firstYearBtechTextileSchema = new Schema({
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

const FirstYearBtechTextileModel = mongoose.model(
  "FirstYearBtechTextileModel",
  firstYearBtechTextileSchema
);

export default FirstYearBtechTextileModel;
