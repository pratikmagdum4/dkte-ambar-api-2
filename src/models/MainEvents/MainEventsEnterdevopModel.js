import mongoose from "mongoose";

const mainEventsEnterdevopSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
   dept: { type: String, default: "" },
});

const MainEventsEnterdevopSchema = mongoose.model(
  "MainEventsEnterdevop",
  mainEventsEnterdevopSchema
);
export default MainEventsEnterdevopSchema;
