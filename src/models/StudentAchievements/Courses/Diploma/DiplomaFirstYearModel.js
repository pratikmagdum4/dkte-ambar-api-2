import mongoose from "mongoose";

const { Schema } = mongoose;

const firstYearDiplomaTTSchema = new Schema({
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
   
  },
});

const FirstYearDiplomaTTModel = mongoose.model(
  "FirstYearDiplomaTTModel",
  firstYearDiplomaTTSchema
);
const firstYearDiplomaFCSchema = new Schema({
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
   
  },
});

const FirstYearDiplomaFCModel = mongoose.model(
  "FirstYearDiplomaFCModel",
  firstYearDiplomaFCSchema
);
const firstYearDiplomaTMSchema = new Schema({
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
   
  },
});

const FirstYearDiplomaTMModel = mongoose.model(
  "FirstYearDiplomaTMModel",
  firstYearDiplomaTMSchema
);

export {
  FirstYearDiplomaTMModel,
  FirstYearDiplomaFCModel,
  FirstYearDiplomaTTModel,
};
