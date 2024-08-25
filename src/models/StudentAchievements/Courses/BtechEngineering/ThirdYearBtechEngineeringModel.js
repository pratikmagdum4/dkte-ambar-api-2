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
    required: false,
  },
});

const ThirdYearBtechEngineeringModel = mongoose.model(
  "ThirdYearBtechEngineeringModel",
  thirdYearBtechEngineeringModel
);

const ThirdYearBtechEngineeringCSESchema = new Schema({
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

const ThirdYearBtechEngineeringCSEModel = mongoose.model(
  " ThirdYearBtechEngineeringCSEModel",
  ThirdYearBtechEngineeringCSESchema
);

const ThirdYearBtechEngineeringAIMLSchema = new Schema({
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

const ThirdYearBtechEngineeringAIMLModel = mongoose.model(
  " ThirdYearBtechEngineeringAIMLModel",
  ThirdYearBtechEngineeringAIMLSchema
);

const ThirdYearBtechEngineeringAIDSSchema = new Schema({
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

const ThirdYearBtechEngineeringAIDSModel = mongoose.model(
  " ThirdYearBtechEngineeringAIDSModel",
  ThirdYearBtechEngineeringAIDSSchema
);

const ThirdYearBtechEngineeringENTCSchema = new Schema({
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

const ThirdYearBtechEngineeringENTCModel = mongoose.model(
  " ThirdYearBtechEngineeringENTCModel",
  ThirdYearBtechEngineeringENTCSchema
);

const ThirdYearBtechEngineeringELESchema = new Schema({
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

const ThirdYearBtechEngineeringELEModel = mongoose.model(
  " ThirdYearBtechEngineeringELEModel",
  ThirdYearBtechEngineeringELESchema
);

const ThirdYearBtechEngineeringMECHSchema = new Schema({
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

const ThirdYearBtechEngineeringMECHModel = mongoose.model(
  " ThirdYearBtechEngineeringMECHModel",
  ThirdYearBtechEngineeringMECHSchema
);

const ThirdYearBtechEngineeringCIVILSchema = new Schema({
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

const ThirdYearBtechEngineeringCIVILModel = mongoose.model(
  " ThirdYearBtechEngineeringCIVILModel",
  ThirdYearBtechEngineeringCIVILSchema
);

export {
  ThirdYearBtechEngineeringModel,
  ThirdYearBtechEngineeringCSEModel,
  ThirdYearBtechEngineeringAIMLModel,
  ThirdYearBtechEngineeringAIDSModel,
  ThirdYearBtechEngineeringENTCModel,
  ThirdYearBtechEngineeringELEModel,
  ThirdYearBtechEngineeringMECHModel,
  ThirdYearBtechEngineeringCIVILModel,
};

