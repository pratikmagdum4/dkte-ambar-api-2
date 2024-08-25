import {
  FirstYearDiplomaTMModel,
  FirstYearDiplomaFCModel,
  FirstYearDiplomaTTModel,
} from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaFirstYearModel.js";
import {
  SecondYearDiplomaTMModel,
  SecondYearDiplomaFCModel,
  SecondYearDiplomaTTModel,
} from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaSecondYearModel.js";
import {
  ThirdYearDiplomaTMModel,
  ThirdYearDiplomaFCModel,
  ThirdYearDiplomaTTModel,
} from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaThirdYearModel.js";

const schemas = {
  first: {
    tm: FirstYearDiplomaTMModel,
    fc: FirstYearDiplomaFCModel,
    tt: FirstYearDiplomaTTModel,
  },
  second: {
    tm: SecondYearDiplomaTMModel,
    fc: SecondYearDiplomaFCModel,
    tt: SecondYearDiplomaTTModel,
  },
  third: {
    tm: ThirdYearDiplomaTMModel,
    fc: ThirdYearDiplomaFCModel,
    tt: ThirdYearDiplomaTTModel,
  },
};

const getSchema = (year, dept) => {
  return schemas[year]?.[dept];
};

const saveFirstYearDiplomaData = async (req, res) => {
  let students = req.body;
  const {dept,year} = req.params
  const schema = getSchema(year, dept);

  try {
    for (const student of students) {
      if (student._id) {
        await schema.findByIdAndUpdate(student._id, student, {
          new: true,
          upsert: true,
        });
      } else {
        const newStudent = new schema(student);
        await newStudent.save();
      }
    }

    res.status(201).json({ message: "Students data saved successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

const getFirstYearDiplomaData = async (req, res) => {
  try {
  const { dept, year } = req.params;
  const schema = getSchema(year, dept);

    const students = await schema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteFirstYearDiplomaData = async (req, res) => {
  try {
    const { id } = req.params;
  const { dept, year } = req.params;
  const schema = getSchema(year, dept);

    if (!schema) {
      return res.status(400).send("Invalid year");
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

const updateFirstYearDiplomaData = async (req, res) => {
  try {
    const {  id } = req.params;
      const { dept, year } = req.params;
      const schema = getSchema(year, dept);

    const { stdname, rank, cgpa } = req.body;
   
    if (!schema) {
      return res.status(400).send("Invalid year");
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
  getFirstYearDiplomaData,
  saveFirstYearDiplomaData,
  deleteFirstYearDiplomaData,
  updateFirstYearDiplomaData,
};
