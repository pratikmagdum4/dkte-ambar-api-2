import mongoose from "mongoose";


const { Schema } = mongoose;

const firstYearBtechEngineeringSchema = new Schema({
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

const FirstYearBtechEngineeringModel = mongoose.model(
  "FirstYearBtechEngineeringModel",
  firstYearBtechEngineeringSchema
);

export default FirstYearBtechEngineeringModel;

