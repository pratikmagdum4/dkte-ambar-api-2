import mongoose from "mongoose";

const textileCompaniesNationalSchema = new mongoose.Schema({
  nationalcompanies: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const TextileCompaniesNationalModel = mongoose.model(
  "TextileCompaniesNationalModel",
  textileCompaniesNationalSchema
);
export default TextileCompaniesNationalModel;
