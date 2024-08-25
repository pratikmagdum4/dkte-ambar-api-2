import mongoose from "mongoose";

const { Schema } = mongoose;

const firstYearBtechTextileSchema = new Schema({
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

const FirstYearBtechTextileModel = mongoose.model(
  "FirstYearBtechTextileModel",
  firstYearBtechTextileSchema
);


const firstYearBtechTextileTTSchema = new Schema({
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

const FirstYearBtechTextileTTModel = mongoose.model(
  "FirstYearBtechTextileTTModel",
  firstYearBtechTextileTTSchema
);
const firstYearBtechTextileTCSchema = new Schema({
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

const FirstYearBtechTextileTCModel = mongoose.model(
  "FirstYearBtechTextileTCModel",
  firstYearBtechTextileTCSchema
);
const firstYearBtechTextileTPSchema = new Schema({
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

const FirstYearBtechTextileTPModel = mongoose.model(
  "FirstYearBtechTextileTPModel",
  firstYearBtechTextileTPSchema
);
const firstYearBtechTextileFTSchema = new Schema({
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

const FirstYearBtechTextileFTModel = mongoose.model(
  "FirstYearBtechTextileFTModel",
  firstYearBtechTextileFTSchema
);
const firstYearBtechTextileMMTTSchema = new Schema({
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

const FirstYearBtechTextileMMTTModel = mongoose.model(
  "FirstYearBtechTextileMMTTModel",
  firstYearBtechTextileMMTTSchema
);




export { FirstYearBtechTextileModel,FirstYearBtechTextileFTModel,FirstYearBtechTextileMMTTModel,FirstYearBtechTextileTCModel,FirstYearBtechTextileTPModel,FirstYearBtechTextileTTModel,
  
};
