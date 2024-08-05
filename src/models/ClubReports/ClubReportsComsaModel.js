import mongoose from "mongoose";

const clubReportsComsaSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsComsaSchema = mongoose.model(
  "ClubReportsComsaSchema",
  clubReportsComsaSchema
);
export default ClubReportsComsaSchema;
