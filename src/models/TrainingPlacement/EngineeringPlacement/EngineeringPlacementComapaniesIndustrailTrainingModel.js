import mongoose from "mongoose";

const engineeringCompaniesIndustrialTrainingSchema = new mongoose.Schema({
  category: { type: String, default: "" },
  studentcount: { type: String, default: "" },
  
});

const EngineeringCompaniesIndustrialTrainingModel = mongoose.model(
  "EngineeringCompaniesIndustrialTrainingModel",
  engineeringCompaniesIndustrialTrainingSchema
);
export default EngineeringCompaniesIndustrialTrainingModel;
