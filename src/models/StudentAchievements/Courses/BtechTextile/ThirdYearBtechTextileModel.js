import mongoose from "mongoose";

const { Schema } = mongoose;

const thirdYearBtechEngineeringSchema = new Schema({
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
  thirdYearBtechEngineeringSchema
);

export default ThirdYearBtechEngineeringModel;
