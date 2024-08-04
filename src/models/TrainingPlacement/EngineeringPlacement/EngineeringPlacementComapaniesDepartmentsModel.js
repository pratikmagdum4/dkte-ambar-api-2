import mongoose from "mongoose";

const engineeringCompaniesDepartmentSchema = new mongoose.Schema({
  branch: { type: String, default: "" },
  studentforcampus: { type: String, default: "" },
  recruitedstd: { type: String, default: "" },
  placementpercentage: { type: String, default: "" },
 
});

const EngineeringCompaniesDepartmentModel = mongoose.model(
  "EngineeringCompaniesDepartmentModel",
  engineeringCompaniesDepartmentSchema
);
export default EngineeringCompaniesDepartmentModel;
