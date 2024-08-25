import mongoose from "mongoose";

const { Schema } = mongoose;

const FourthYearBtechTextileSchema = new Schema({
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

const FourthYearBtechTextileModel = mongoose.model(
  "  FourthYearBtechTextileModel",
  FourthYearBtechTextileSchema
);

const FourthYearBtechTextileTTSchema = new Schema({
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

const FourthYearBtechTextileTTModel = mongoose.model(
  "  FourthYearBtechTextileTTModel",
  FourthYearBtechTextileTTSchema
);
const FourthYearBtechTextileTCSchema = new Schema({
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

const FourthYearBtechTextileTCModel = mongoose.model(
  "  FourthYearBtechTextileTCModel",
  FourthYearBtechTextileTCSchema
);
const FourthYearBtechTextileTPSchema = new Schema({
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

const FourthYearBtechTextileTPModel = mongoose.model(
  "  FourthYearBtechTextileTPModel",
  FourthYearBtechTextileTPSchema
);
const FourthYearBtechTextileFTSchema = new Schema({
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

const FourthYearBtechTextileFTModel = mongoose.model(
  "  FourthYearBtechTextileFTModel",
  FourthYearBtechTextileFTSchema
);
const FourthYearBtechTextileMMTTSchema = new Schema({
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

const FourthYearBtechTextileMMTTModel = mongoose.model(
  "  FourthYearBtechTextileMMTTModel",
  FourthYearBtechTextileMMTTSchema
);

export {
  FourthYearBtechTextileModel,
  FourthYearBtechTextileFTModel,
  FourthYearBtechTextileMMTTModel,
  FourthYearBtechTextileTCModel,
  FourthYearBtechTextileTPModel,
  FourthYearBtechTextileTTModel,
};
