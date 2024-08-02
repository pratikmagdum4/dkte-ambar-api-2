import mongoose from "mongoose";

const { Schema } = mongoose;

const thirdYearBtechEngineeringModel = new Schema({
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

const ThirdYearBtechEngineeringModel = mongoose.model(
  "ThirdYearBtechEngineeringModel",
  thirdYearBtechEngineeringModel
);

export default ThirdYearBtechEngineeringModel;
