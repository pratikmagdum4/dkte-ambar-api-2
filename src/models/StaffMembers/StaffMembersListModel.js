

import mongoose from "mongoose";

const staffMembersListSchema = new mongoose.Schema({
  srno: { type: String, default: "" },

  position: { type: String, default: "" },
});

const StaffMembersListSchema = mongoose.model(
  "StaffMembersListSchema",
  staffMembersListSchema
);
export default StaffMembersListSchema;
