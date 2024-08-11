import mongoose from "mongoose";

const mainEventsCareerSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const MainEventsCareerSchema = mongoose.model(
  "MainEventsCareer",
  mainEventsCareerSchema
);
export default MainEventsCareerSchema;
