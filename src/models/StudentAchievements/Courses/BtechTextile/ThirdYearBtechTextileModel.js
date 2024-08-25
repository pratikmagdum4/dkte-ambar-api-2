import mongoose from "mongoose";

const { Schema } = mongoose;

const ThirdYearBtechTextileSchema = new Schema({
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

const ThirdYearBtechTextileModel = mongoose.model(
  "    ThirdYearBtechTextileModel",
  ThirdYearBtechTextileSchema
);

const ThirdYearBtechTextileTTSchema = new Schema({
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

const ThirdYearBtechTextileTTModel = mongoose.model(
  "    ThirdYearBtechTextileTTModel",
  ThirdYearBtechTextileTTSchema
);
const ThirdYearBtechTextileTCSchema = new Schema({
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

const ThirdYearBtechTextileTCModel = mongoose.model(
  "    ThirdYearBtechTextileTCModel",
  ThirdYearBtechTextileTCSchema
);
const ThirdYearBtechTextileTPSchema = new Schema({
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

const ThirdYearBtechTextileTPModel = mongoose.model(
  "    ThirdYearBtechTextileTPModel",
  ThirdYearBtechTextileTPSchema
);
const ThirdYearBtechTextileFTSchema = new Schema({
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

const ThirdYearBtechTextileFTModel = mongoose.model(
  "    ThirdYearBtechTextileFTModel",
  ThirdYearBtechTextileFTSchema
);
const ThirdYearBtechTextileMMTTSchema = new Schema({
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

const ThirdYearBtechTextileMMTTModel = mongoose.model(
  "    ThirdYearBtechTextileMMTTModel",
  ThirdYearBtechTextileMMTTSchema
);

export {
  ThirdYearBtechTextileModel,
  ThirdYearBtechTextileFTModel,
  ThirdYearBtechTextileMMTTModel,
  ThirdYearBtechTextileTCModel,
  ThirdYearBtechTextileTPModel,
  ThirdYearBtechTextileTTModel,
};
