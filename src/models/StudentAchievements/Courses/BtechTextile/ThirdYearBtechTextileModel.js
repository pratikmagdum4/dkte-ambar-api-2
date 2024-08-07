import mongoose from "mongoose";

const { Schema } = mongoose;

const thirdYearBtechTextileSchema = new Schema({
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

const ThirdYearBtechTextileModel = mongoose.model(
  "ThirdYearBtechTextileModel",
  thirdYearBtechTextileSchema
);

export default ThirdYearBtechTextileModel;
