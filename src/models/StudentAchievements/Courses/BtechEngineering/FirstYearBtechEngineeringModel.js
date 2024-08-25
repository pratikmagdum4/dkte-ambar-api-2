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
    required: false,
  },
});

const FirstYearBtechEngineeringModel = mongoose.model(
  "FirstYearBtechEngineeringModel",
  firstYearBtechEngineeringSchema
);



const firstYearBtechEngineeringCSESchema = new Schema({
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

const FirstYearBtechEngineeringCSEModel = mongoose.model(
  "FirstYearBtechEngineeringCSEModel",
  firstYearBtechEngineeringCSESchema
);

const firstYearBtechEngineeringAIMLSchema = new Schema({
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

const FirstYearBtechEngineeringAIMLModel = mongoose.model(
  "FirstYearBtechEngineeringAIMLModel",
  firstYearBtechEngineeringAIMLSchema
);

const firstYearBtechEngineeringAIDSSchema = new Schema({
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

const FirstYearBtechEngineeringAIDSModel = mongoose.model(
  "FirstYearBtechEngineeringAIDSModel",
  firstYearBtechEngineeringAIDSSchema
);

const firstYearBtechEngineeringENTCSchema = new Schema({
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

const FirstYearBtechEngineeringENTCModel = mongoose.model(
  "FirstYearBtechEngineeringENTCModel",
  firstYearBtechEngineeringENTCSchema
);

const firstYearBtechEngineeringELESchema = new Schema({
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

const FirstYearBtechEngineeringELEModel = mongoose.model(
  "FirstYearBtechEngineeringELEModel",
  firstYearBtechEngineeringELESchema
);

const firstYearBtechEngineeringMECHSchema = new Schema({
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

const FirstYearBtechEngineeringMECHModel = mongoose.model(
  "FirstYearBtechEngineeringMECHModel",
  firstYearBtechEngineeringMECHSchema
);

const firstYearBtechEngineeringCIVILSchema = new Schema({
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

const FirstYearBtechEngineeringCIVILModel = mongoose.model(
  "FirstYearBtechEngineeringCIVILModel",
  firstYearBtechEngineeringCIVILSchema
);

export {
  FirstYearBtechEngineeringModel,
  FirstYearBtechEngineeringCSEModel,
  FirstYearBtechEngineeringAIMLModel,
  FirstYearBtechEngineeringAIDSModel,
  FirstYearBtechEngineeringENTCModel,
  FirstYearBtechEngineeringELEModel,
  FirstYearBtechEngineeringMECHModel,
  FirstYearBtechEngineeringCIVILModel,
  
};

