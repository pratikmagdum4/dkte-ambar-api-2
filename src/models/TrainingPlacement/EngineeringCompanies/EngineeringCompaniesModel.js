import mongoose from "mongoose";

const engineeringCompaniesSchema = new mongoose.Schema({
  engineeringcompanies: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const EngineeringCompaniesModel = mongoose.model(
  "EngineeringCompaniesModel",
  engineeringCompaniesSchema
);
export default EngineeringCompaniesModel;


