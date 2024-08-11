import mongoose from "mongoose";

const staffMembersCountSchema = new mongoose.Schema({
  namecat: { type: String, default: "" },
  positioncount: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StaffMembersCountModel = mongoose.model(
  "StaffMembersCountModel",
  staffMembersCountSchema
);


export default StaffMembersCountModel;
