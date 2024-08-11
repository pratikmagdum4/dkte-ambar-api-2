import mongoose from "mongoose";

const textilePlacementIndustrialTrainingSchema = new mongoose.Schema({
  category: { type: String, default: "" },
  studentcount: { type: String, default: "" },
   dept: { type: String, default: "" },
});

const TextilePlacementIndustrialTrainingModel = mongoose.model(
  "TextilePlacementIndustrialTrainingModel",
  textilePlacementIndustrialTrainingSchema
);
export default TextilePlacementIndustrialTrainingModel;

