import mongoose from "mongoose";

const staffMembersCateCountSchema = new mongoose.Schema({
  ugpgmba: { type: String, default: "" },
  count: { type: String, default: "" },
});

const StaffMembersCateCountSchema = mongoose.model(
  "StaffMembersCateCountSchema",
  staffMembersCateCountSchema
);

export default StaffMembersCateCountSchema;
