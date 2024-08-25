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
    required: false,
  },
});

const FourthYearBtechEngineeringModel = mongoose.model(
  "FourthYearBtechEngineeringModel",
  fourthYearBtechEngineeringSchema
);


const FourthYearBtechEngineeringCSESchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringCSEModel = mongoose.model(
  "FourthYearBtechEngineeringCSEModel",
  FourthYearBtechEngineeringCSESchema
);

const FourthYearBtechEngineeringAIMLSchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringAIMLModel = mongoose.model(
  "FourthYearBtechEngineeringAIMLModel",
  FourthYearBtechEngineeringAIMLSchema
);

const fourthYearBtechEngineeringAIDSSchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringAIDSModel = mongoose.model(
  "FourthYearBtechEngineeringAIDSModel",
  fourthYearBtechEngineeringAIDSSchema
);

const fourthYearBtechEngineeringENTCSchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringENTCModel = mongoose.model(
  "FourthYearBtechEngineeringENTCModel",
  fourthYearBtechEngineeringENTCSchema
);

const fourthYearBtechEngineeringELESchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringELEModel = mongoose.model(
  "FourthYearBtechEngineeringELEModel",
  fourthYearBtechEngineeringELESchema
);

const fourthYearBtechEngineeringMECHSchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringMECHModel = mongoose.model(
  "FourthYearBtechEngineeringMECHModel",
  fourthYearBtechEngineeringMECHSchema
);

const fourthYearBtechEngineeringCIVILSchema = new Schema({
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
    required: false,
  },
});

const FourthYearBtechEngineeringCIVILModel = mongoose.model(
  "FourthYearBtechEngineeringCIVILModel",
  fourthYearBtechEngineeringCIVILSchema
);

export {
  FourthYearBtechEngineeringModel,
  FourthYearBtechEngineeringCSEModel,
  FourthYearBtechEngineeringAIMLModel,
  FourthYearBtechEngineeringAIDSModel,
  FourthYearBtechEngineeringENTCModel,
  FourthYearBtechEngineeringELEModel,
  FourthYearBtechEngineeringMECHModel,
  FourthYearBtechEngineeringCIVILModel,
};