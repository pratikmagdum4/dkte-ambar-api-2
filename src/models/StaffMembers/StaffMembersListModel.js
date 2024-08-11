

import mongoose from "mongoose";

const staffMembersListSchema = new mongoose.Schema({
  name: { type: String, default: "" },

  position: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StaffMembersListModel = mongoose.model(
  "StaffMembersListModel",
  staffMembersListSchema
);
export default StaffMembersListModel;
