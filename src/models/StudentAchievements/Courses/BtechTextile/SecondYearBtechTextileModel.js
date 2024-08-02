import mongoose from "mongoose";

const { Schema } = mongoose;

const secondYearBtechEngineeringSchema = new Schema({
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

const SecondYearBtechTextileModel = mongoose.model(
  "SecondYearBtechTextileModel",
  secondYearBtechEngineeringSchema
);

export default SecondYearBtechTextileModel;
