import mongoose from "mongoose";

const mbaSchema1= new mongoose.Schema({


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
   
  },


});

const FirstYearMBAModel = mongoose.model("FirstYearMBAModel", mbaSchema1);
const mbaSchema2 = new mongoose.Schema({


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
   
  },


});

const SecondYearMBAModel = mongoose.model("SecondYearMBAModel", mbaSchema2);
export { FirstYearMBAModel, SecondYearMBAModel };
