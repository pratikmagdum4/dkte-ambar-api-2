import mongoose from "mongoose";

const { Schema } = mongoose;

const SecondYearBtechTextileSchema = new Schema({
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

const SecondYearBtechTextileModel = mongoose.model(
  "    SecondYearBtechTextileModel",
  SecondYearBtechTextileSchema
);

const SecondYearBtechTextileTTSchema = new Schema({
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

const SecondYearBtechTextileTTModel = mongoose.model(
  "    SecondYearBtechTextileTTModel",
  SecondYearBtechTextileTTSchema
);
const SecondYearBtechTextileTCSchema = new Schema({
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

const SecondYearBtechTextileTCModel = mongoose.model(
  "    SecondYearBtechTextileTCModel",
  SecondYearBtechTextileTCSchema
);
const SecondYearBtechTextileTPSchema = new Schema({
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

const SecondYearBtechTextileTPModel = mongoose.model(
  "    SecondYearBtechTextileTPModel",
  SecondYearBtechTextileTPSchema
);
const SecondYearBtechTextileFTSchema = new Schema({
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

const SecondYearBtechTextileFTModel = mongoose.model(
  "    SecondYearBtechTextileFTModel",
  SecondYearBtechTextileFTSchema
);
const SecondYearBtechTextileMMTTSchema = new Schema({
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

const SecondYearBtechTextileMMTTModel = mongoose.model(
  "    SecondYearBtechTextileMMTTModel",
  SecondYearBtechTextileMMTTSchema
);

export {
  SecondYearBtechTextileModel,
  SecondYearBtechTextileFTModel,
  SecondYearBtechTextileMMTTModel,
  SecondYearBtechTextileTCModel,
  SecondYearBtechTextileTPModel,
  SecondYearBtechTextileTTModel,
};
