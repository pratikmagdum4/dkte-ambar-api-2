import mongoose from "mongoose";

const engineeringCompaniesPackageOfferedSchema = new mongoose.Schema({
  minmaxavg: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const EngineeringCompaniesPackageOfferedModel = mongoose.model(
  "EngineeringCompaniesPackageOfferedModel",
  engineeringCompaniesPackageOfferedSchema
);
export default EngineeringCompaniesPackageOfferedModel;
