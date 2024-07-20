import mongoose from "mongoose";

const mainEventsTechsymposiumSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const MainEventsTechsymposiumSchema = mongoose.model(
  "MainEventsTechsymposium",
  mainEventsTechsymposiumSchema
);
export default MainEventsTechsymposiumSchema;
