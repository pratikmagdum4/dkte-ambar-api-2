import mongoose from "mongoose";

const { Schema } = mongoose;

const secondYearBtechEngineeringModel = new Schema({
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

const SecondYearBtechEngineeringModel = mongoose.model(
  "SecondYearBtechEngineeringModel",
  secondYearBtechEngineeringModel
);

export default SecondYearBtechEngineeringModel;
