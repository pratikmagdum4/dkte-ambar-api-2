import mongoose from "mongoose";

const mbaSchema = new mongoose.Schema({


  rank: {
    type: Number,
    required: false,
  },
  stdname: {
    type: String,
    required: false,
  },



  cgpa: {
    type: String,
    required: false,
  },
  dept: {
    type: String,
    required: true,
  },


});

const MBAModel = mongoose.model("MBAModel", mbaSchema);
export default MBAModel;
