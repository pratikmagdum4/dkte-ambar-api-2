import mongoose from "mongoose";

const clubReportsCesaSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsCesaSchema = mongoose.model(
  "ClubReportsCesaSchema",
  clubReportsCesaSchema
);
export default ClubReportsCesaSchema;
