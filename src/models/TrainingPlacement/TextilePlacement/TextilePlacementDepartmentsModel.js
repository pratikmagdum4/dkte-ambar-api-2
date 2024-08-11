import mongoose from "mongoose";

const textilePlacementDepartmentSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  branch: { type: String, default: "" },
  studentforcampus: { type: String, default: "" },
  recruitedstd: { type: String, default: "" },
  placementpercentage: { type: String, default: "" },
  dept: { type: String, default: "" },
});


const TextilePlacementDepartmentModel = mongoose.model(
  "TextilePlacementDepartmentModel",
  textilePlacementDepartmentSchema
);
export default TextilePlacementDepartmentModel;
