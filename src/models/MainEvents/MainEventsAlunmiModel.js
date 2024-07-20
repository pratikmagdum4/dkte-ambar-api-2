import mongoose from "mongoose";

const mainEventsAlunmiSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const MainEventsAlunmiSchema = mongoose.model(
  "MainEventsAlunmi",
  mainEventsAlunmiSchema
);
export default MainEventsAlunmiSchema;
