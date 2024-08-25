import mongoose from "mongoose";

const { Schema } = mongoose;

const SecondYearDiplomaTTSchema = new Schema({
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

const SecondYearDiplomaTTModel = mongoose.model(
  "SecondYearDiplomaTTModel",
  SecondYearDiplomaTTSchema
);
const SecondYearDiplomaFCSchema = new Schema({
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

const SecondYearDiplomaFCModel = mongoose.model(
  "SecondYearDiplomaFCModel",
  SecondYearDiplomaFCSchema
);
const SecondYearDiplomaTMSchema = new Schema({
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

const SecondYearDiplomaTMModel = mongoose.model(
  "SecondYearDiplomaTMModel",
  SecondYearDiplomaTMSchema
);

export {
  SecondYearDiplomaTMModel,
  SecondYearDiplomaFCModel,
  SecondYearDiplomaTTModel,
};
