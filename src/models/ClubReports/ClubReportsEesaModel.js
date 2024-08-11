import mongoose from "mongoose";

const clubReportsEesaSchema = new mongoose.Schema({
  // srno: { type: String, default: "" },
  info: { type: String, default: "" },
   dept: { type: String, default: "" },
});

const ClubReportsEesaSchema = mongoose.model(
  "ClubReportsEesaSchema",
  clubReportsEesaSchema
);
export default ClubReportsEesaSchema;
