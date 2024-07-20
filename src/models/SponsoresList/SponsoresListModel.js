import mongoose from "mongoose";

const sponsorListSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  sponsors: { type: String, default: "" },
});

const SponsorListSchema = mongoose.model(
  "sponsorListSchema",
  sponsorListSchema
);
export default SponsorListSchema;
