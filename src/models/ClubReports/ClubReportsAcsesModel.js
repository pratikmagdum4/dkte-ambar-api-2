import mongoose from "mongoose";

const clubReportsAcsesSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsAcsesSchema = mongoose.model(
  "ClubReportsAcsesSchema",
  clubReportsAcsesSchema
);
export default ClubReportsAcsesSchema;

