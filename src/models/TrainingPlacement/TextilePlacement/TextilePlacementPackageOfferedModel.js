import mongoose from "mongoose";

const textilePlacementPackageOfferedSchema = new mongoose.Schema({
  minmaxavg: { type: String, default: "" },
  info: { type: String, default: "" },
});

const TextilePlacementPackageOfferedModel = mongoose.model(
  "TextilePlacementPackageOfferedModel",
  textilePlacementPackageOfferedSchema
);

export default TextilePlacementPackageOfferedModel;
