import mongoose from "mongoose";

const clubReportsAisaSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsAisaSchema = mongoose.model(
  "ClubReportsAisaSchema",
  clubReportsAisaSchema
);
export default ClubReportsAisaSchema;
