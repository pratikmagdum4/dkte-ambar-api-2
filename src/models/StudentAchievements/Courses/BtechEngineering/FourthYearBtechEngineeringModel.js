import mongoose from "mongoose";

const { Schema } = mongoose;

const fourthYearBtechEngineeringSchema = new Schema({
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

const FourthYearBtechEngineeringModel = mongoose.model(
  "FourthYearBtechEngineeringModel",
  fourthYearBtechEngineeringSchema
);

export default FourthYearBtechEngineeringModel;
