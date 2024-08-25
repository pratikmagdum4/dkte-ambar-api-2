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
    required: false,
  },
});

const SecondYearBtechEngineeringModel = mongoose.model(
  "SecondYearBtechEngineeringModel",
  secondYearBtechEngineeringModel
);

const SecondYearBtechEngineeringCSESchema = new Schema({
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

const SecondYearBtechEngineeringCSEModel = mongoose.model(
  " SecondYearBtechEngineeringCSEModel",
  SecondYearBtechEngineeringCSESchema
);

const SecondYearBtechEngineeringAIMLSchema = new Schema({
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

const SecondYearBtechEngineeringAIMLModel = mongoose.model(
  " SecondYearBtechEngineeringAIMLModel",
  SecondYearBtechEngineeringAIMLSchema
);

const SecondYearBtechEngineeringAIDSSchema = new Schema({
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

const SecondYearBtechEngineeringAIDSModel = mongoose.model(
  " SecondYearBtechEngineeringAIDSModel",
  SecondYearBtechEngineeringAIDSSchema
);

const SecondYearBtechEngineeringENTCSchema = new Schema({
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

const SecondYearBtechEngineeringENTCModel = mongoose.model(
  " SecondYearBtechEngineeringENTCModel",
  SecondYearBtechEngineeringENTCSchema
);

const SecondYearBtechEngineeringELESchema = new Schema({
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

const SecondYearBtechEngineeringELEModel = mongoose.model(
  " SecondYearBtechEngineeringELEModel",
  SecondYearBtechEngineeringELESchema
);

const SecondYearBtechEngineeringMECHSchema = new Schema({
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

const SecondYearBtechEngineeringMECHModel = mongoose.model(
  " SecondYearBtechEngineeringMECHModel",
  SecondYearBtechEngineeringMECHSchema
);

const SecondYearBtechEngineeringCIVILSchema = new Schema({
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

const SecondYearBtechEngineeringCIVILModel = mongoose.model(
  " SecondYearBtechEngineeringCIVILModel",
  SecondYearBtechEngineeringCIVILSchema
);

export {
  SecondYearBtechEngineeringModel,
  SecondYearBtechEngineeringCSEModel,
  SecondYearBtechEngineeringAIMLModel,
  SecondYearBtechEngineeringAIDSModel,
  SecondYearBtechEngineeringENTCModel,
  SecondYearBtechEngineeringELEModel,
  SecondYearBtechEngineeringMECHModel,
  SecondYearBtechEngineeringCIVILModel,
};
