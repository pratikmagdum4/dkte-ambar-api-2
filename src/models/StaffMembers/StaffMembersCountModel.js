import mongoose from "mongoose";

const staffMembersCountSchema = new mongoose.Schema({
  ugpgmba: { type: String, default: "" },
  count: { type: String, default: "" },
});

const StaffMembersCountSchema = mongoose.model(
  "StaffMembersCountSchema",
  staffMembersCountSchema
);


export default StaffMembersCountSchema;
