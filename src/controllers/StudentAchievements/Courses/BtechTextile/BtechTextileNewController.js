import { FirstYearBtechTextileFTModel,FirstYearBtechTextileMMTTModel,FirstYearBtechTextileTCModel,FirstYearBtechTextileTPModel,FirstYearBtechTextileTTModel, } from "../../../../models/StudentAchievements/Courses/BtechTextile/FirstYearBtechTextileModel.js";
import {
  SecondYearBtechTextileFTModel,
  SecondYearBtechTextileMMTTModel,
  SecondYearBtechTextileTCModel,
  SecondYearBtechTextileTPModel,
  SecondYearBtechTextileTTModel,
} from "../../../../models/StudentAchievements/Courses/BtechTextile/SecondYearBtechTextileModel.js";
import {
  ThirdYearBtechTextileFTModel,
  ThirdYearBtechTextileMMTTModel,
  ThirdYearBtechTextileTCModel,
  ThirdYearBtechTextileTPModel,
  ThirdYearBtechTextileTTModel,
} from "../../../../models/StudentAchievements/Courses/BtechTextile/ThirdYearBtechTextileModel.js";
import {
  FourthYearBtechTextileFTModel,
  FourthYearBtechTextileMMTTModel,
  FourthYearBtechTextileTCModel,
  FourthYearBtechTextileTPModel,
  FourthYearBtechTextileTTModel,
} from "../../../../models/StudentAchievements/Courses/BtechTextile/FourthYearBtechTextileModel.js";
const schemas = {
  first: {
    ft: FirstYearBtechTextileFTModel,
    mmtt: FirstYearBtechTextileMMTTModel,
    tc: FirstYearBtechTextileTCModel,
    tp: FirstYearBtechTextileTPModel,
    tt: FirstYearBtechTextileTTModel,
  },
  second: {
    ft: SecondYearBtechTextileFTModel,
    mmtt: SecondYearBtechTextileMMTTModel,
    tc: SecondYearBtechTextileTCModel,
    tp: SecondYearBtechTextileTPModel,
    tt: SecondYearBtechTextileTTModel,
  },
  third: {
    ft: ThirdYearBtechTextileFTModel,
    mmtt: ThirdYearBtechTextileMMTTModel,
    tc: ThirdYearBtechTextileTCModel,
    tp: ThirdYearBtechTextileTPModel,
    tt: ThirdYearBtechTextileTTModel,
  },
  fourth: {
    ft: FourthYearBtechTextileFTModel,
    mmtt: FourthYearBtechTextileMMTTModel,
    tc: FourthYearBtechTextileTCModel,
    tp: FourthYearBtechTextileTPModel,
    tt: FourthYearBtechTextileTTModel,
  },
};

const getSchema = (year, dept) => {
  return schemas[year]?.[dept];
};

const saveBtechTextileAchievements = async (req, res) => {
  try {
    let students = req.body;
    const { year, dept } = req.params;
    console.log("The year and dept are",dept,year);
    console.log("the depratment is ",dept)
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

const getBtechTextileAchievements = async (req, res) => {
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

const deleteBtechTextileAchievements = async (req, res) => {
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

const updateBtechTextileAchievements = async (req, res) => {
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
  saveBtechTextileAchievements,
  getBtechTextileAchievements,
  deleteBtechTextileAchievements,
  updateBtechTextileAchievements,
};
