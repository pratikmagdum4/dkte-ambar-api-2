import mongoose from "mongoose";

const clubReportsMesaSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsMesaSchema = mongoose.model(
  "ClubReportsMesaSchema",
  clubReportsMesaSchema
);
export default ClubReportsMesaSchema;
