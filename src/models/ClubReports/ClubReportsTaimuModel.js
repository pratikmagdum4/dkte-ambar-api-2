import mongoose from "mongoose";

const clubReportsTaimuSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsTaimuSchema = mongoose.model(
  "ClubReportsTaimuSchema",
  clubReportsTaimuSchema
);
export default ClubReportsTaimuSchema;
