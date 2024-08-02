import mongoose from "mongoose";

const { Schema } = mongoose;

const fourthYearBtechTextileSchema = new Schema({
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

const FourthYearBtechTextileModel = mongoose.model(
  "FourthYearBtechTextileModel",
  fourthYearBtechTextileSchema
);

export default FourthYearBtechTextileModel;
