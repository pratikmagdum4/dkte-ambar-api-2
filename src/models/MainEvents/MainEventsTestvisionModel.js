import mongoose from "mongoose";

const mainEventsTestvisionSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const MainEventsTestvisionSchema = mongoose.model(
  "MainEventsTestvision",
  mainEventsTestvisionSchema
);
export default MainEventsTestvisionSchema;
