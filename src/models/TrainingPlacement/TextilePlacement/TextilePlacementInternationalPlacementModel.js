import mongoose from "mongoose";

const textilePlacementInternationalPlacementSchema = new mongoose.Schema({
  minmaxavg: { type: String, default: "" },
  info: { type: String, default: "" },
   dept: { type: String, default: "" },
});

const TextilePlacementInternationalPlacementModel = mongoose.model(
  "TextilePlacementInternationalPlacementModel",
  textilePlacementInternationalPlacementSchema
);
export default TextilePlacementInternationalPlacementModel;

