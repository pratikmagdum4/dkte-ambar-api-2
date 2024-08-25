import {
  FirstYearMBAModel,
  SecondYearMBAModel,
} from "../../../../models/StudentAchievements/Courses/MBA/MBAModel.js";

const schemas = {
  first: FirstYearMBAModel,
  second: SecondYearMBAModel,
};

const getSchema = (year) => {
  return schemas[year];
};

const saveMbaData = async (req, res) => {
  let students = req.body;
  const {year} = req.params;
  const schema = getSchema(year);



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

const getMbaData = async (req, res) => {
  try {
    const { year } = req.params;
    const schema = getSchema(year);
    const students = await schema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMbaData = async (req, res) => {
  try {
    const { year, id } = req.params;
    const schema = getSchema(year);
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

const updateMbaData = async (req, res) => {
  try {
    const { year, id } = req.params;
    const { stdname, rank, cgpa } = req.body;
    const schema = getSchema(year);
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

export { getMbaData, saveMbaData, deleteMbaData, updateMbaData };
