import mongoose from "mongoose";

const clubReportsIetSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const ClubReportsIetSchema = mongoose.model(
  "ClubReportsIetSchema",
  clubReportsIetSchema
);
export default ClubReportsIetSchema;
