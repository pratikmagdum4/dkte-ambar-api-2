import mongoose from "mongoose";

const textileCompaniesInternationalSchema = new mongoose.Schema({
  internationalcompanies: { type: String, default: "" },
   dept: { type: String, default: "" },
});

const TextileCompaniesInternationalModel = mongoose.model(
  "TextileCompaniesInternationalModel",
  textileCompaniesInternationalSchema
);
export default TextileCompaniesInternationalModel;
