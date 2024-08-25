import mongoose from "mongoose";

const { Schema } = mongoose;

const ThirdYearDiplomaTTSchema = new Schema({
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

const ThirdYearDiplomaTTModel = mongoose.model(
  " ThirdYearDiplomaTTModel",
  ThirdYearDiplomaTTSchema
);
const ThirdYearDiplomaFCSchema = new Schema({
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

const ThirdYearDiplomaFCModel = mongoose.model(
  " ThirdYearDiplomaFCModel",
  ThirdYearDiplomaFCSchema
);
const ThirdYearDiplomaTMSchema = new Schema({
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

const ThirdYearDiplomaTMModel = mongoose.model(
  " ThirdYearDiplomaTMModel",
  ThirdYearDiplomaTMSchema
);


export {
  ThirdYearDiplomaTMModel,
  ThirdYearDiplomaFCModel,
  ThirdYearDiplomaTTModel,
};
