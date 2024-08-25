import { FirstYearBtechEngineeringAIDSModel,FirstYearBtechEngineeringAIMLModel,FirstYearBtechEngineeringCSEModel,FirstYearBtechEngineeringELEModel,FirstYearBtechEngineeringCIVILModel,FirstYearBtechEngineeringMECHModel,FirstYearBtechEngineeringENTCModel } from "../../../../models/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringModel.js";
import {
  SecondYearBtechEngineeringCSEModel,
  SecondYearBtechEngineeringAIMLModel,
  SecondYearBtechEngineeringAIDSModel,
  SecondYearBtechEngineeringENTCModel,
  SecondYearBtechEngineeringELEModel,
  SecondYearBtechEngineeringMECHModel,
  SecondYearBtechEngineeringCIVILModel,
} from "../../../../models/StudentAchievements/Courses/BtechEngineering/SecondYearBtechEngineeringModel.js";
import {
  ThirdYearBtechEngineeringCSEModel,
  ThirdYearBtechEngineeringAIMLModel,
  ThirdYearBtechEngineeringAIDSModel,
  ThirdYearBtechEngineeringENTCModel,
  ThirdYearBtechEngineeringELEModel,
  ThirdYearBtechEngineeringMECHModel,
  ThirdYearBtechEngineeringCIVILModel,
} from "../../../../models/StudentAchievements/Courses/BtechEngineering/ThirdYearBtechEngineeringModel.js";

import {
  FourthYearBtechEngineeringCSEModel,
  FourthYearBtechEngineeringAIMLModel,
  FourthYearBtechEngineeringAIDSModel,
  FourthYearBtechEngineeringENTCModel,
  FourthYearBtechEngineeringELEModel,
  FourthYearBtechEngineeringMECHModel,
  FourthYearBtechEngineeringCIVILModel,
} from "../../../../models/StudentAchievements/Courses/BtechEngineering/FourthYearBtechEngineeringModel.js";
const schemas = {
  first: {
    cse: FirstYearBtechEngineeringCSEModel,
    ele: FirstYearBtechEngineeringELEModel,
    civil: FirstYearBtechEngineeringCIVILModel,
    mech: FirstYearBtechEngineeringMECHModel,
    entc: FirstYearBtechEngineeringENTCModel,
    aids: FirstYearBtechEngineeringAIDSModel,
    aiml: FirstYearBtechEngineeringAIMLModel,
  },
  second: {
    cse: SecondYearBtechEngineeringCSEModel,
    ele: SecondYearBtechEngineeringELEModel,
    civil: SecondYearBtechEngineeringCIVILModel,
    mech: SecondYearBtechEngineeringMECHModel,
    entc: SecondYearBtechEngineeringENTCModel,
    aids: SecondYearBtechEngineeringAIDSModel,
    aiml: SecondYearBtechEngineeringAIMLModel,
  },
  third: {
    cse: ThirdYearBtechEngineeringCSEModel,
    ele: ThirdYearBtechEngineeringELEModel,
    civil: ThirdYearBtechEngineeringCIVILModel,
    mech: ThirdYearBtechEngineeringMECHModel,
    entc: ThirdYearBtechEngineeringENTCModel,
    aids: ThirdYearBtechEngineeringAIDSModel,
    aiml: ThirdYearBtechEngineeringAIMLModel,
  },
  fourth: {
    cse: FourthYearBtechEngineeringCSEModel,
    ele: FourthYearBtechEngineeringELEModel,
    civil: FourthYearBtechEngineeringCIVILModel,
    mech: FourthYearBtechEngineeringMECHModel,
    entc: FourthYearBtechEngineeringENTCModel,
    aids: FourthYearBtechEngineeringAIDSModel,
    aiml: FourthYearBtechEngineeringAIMLModel,
  },
};

const getSchema = (year,dept) =>{
    return schemas[year]?.[dept];
}

const saveBtechEngineeringAchievements = async (req, res) => {
  try {
    let students = req.body;
    const { year, dept } = req.params;
    const schema = getSchema(year, dept);
    if (!schema) {
      return res.status(400).send("Invalid year or department");
    }

    const savedAchievements = [];
    for (const std of students) {
      const { _id, rank, stdname, cgpa, dept } = std;
      if (_id) {
        let existingAchievement = await schema.findByIdAndUpdate(
          _id,
          { rank, stdname, cgpa, dept },
          { new: true }
        );
        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new schema({ rank, stdname, cgpa, dept });
        const savedAchievement = await newAchievement.save();
        savedAchievements.push(savedAchievement);
      }
    }
    res.status(200).send(savedAchievements);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
};

const getBtechEngineeringAchievements = async (req, res) => {
  try {
    const { year, dept } = req.params;
    const schema = getSchema(year, dept);
    if (!schema) {
      return res.status(400).send("Invalid year or department");
    }

    const students = await schema.find();
    res.status(200).send(students);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

const deleteBtechEngineeringAchievements = async (req, res) => {
  try {
    const { year, dept, id } = req.params;
    const schema = getSchema(year, dept);
    if (!schema) {
      return res.status(400).send("Invalid year or department");
    }

    const student = await schema.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};

const updateBtechEngineeringAchievements = async (req, res) => {
  try {
    const { year, dept, id } = req.params;
    const { stdname, rank, cgpa } = req.body;
    const schema = getSchema(year, dept);
    if (!schema) {
      return res.status(400).send("Invalid year or department");
    }

    const student = await schema.findByIdAndUpdate(
      id,
      { stdname, rank, cgpa },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating student" });
  }
};

export {
  saveBtechEngineeringAchievements,
  getBtechEngineeringAchievements,
  deleteBtechEngineeringAchievements,
  updateBtechEngineeringAchievements,
};