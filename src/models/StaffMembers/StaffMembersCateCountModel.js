import mongoose from "mongoose";

const staffMembersCateCountSchema = new mongoose.Schema({
  ugpgmba: { type: String, default: "" },
  count: { type: String, default: "" },
});

const StaffMembersCateCountModel = mongoose.model(
  "StaffMembersCateCountModel",
  staffMembersCateCountSchema
);

export default StaffMembersCateCountModel;
