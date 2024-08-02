import FirstYearBtechEngineeringModel from "../../../../models/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringModel.js";
import SecondYearBtechEngineeringModel from "../../../../models/StudentAchievements/Courses/BtechEngineering/SecondYearBtechEngineeringModel.js";
import ThirdYearBtechEngineeringModel from "../../../../models/StudentAchievements/Courses/BtechEngineering/ThirdYearBtechEngineeringModel.js";
import FourthYearBtechEngineeringModel from "../../../../models/StudentAchievements/Courses/BtechEngineering/FourthYearBtechEngineeringModel.js";
const schemas = {
  first: FirstYearBtechEngineeringModel,
  second: SecondYearBtechEngineeringModel,
  third: ThirdYearBtechEngineeringModel,
  fourth: FourthYearBtechEngineeringModel,
};

const getSchema = (year) => {

    return schemas[year];
}


const saveFirstYearBtechEngineeringData = async (req, res,year) => {
  let students = req.body.students;
    const schemas = getSchema(year);
  // Filter out students with empty fields
  students = students.filter(
    (student) => student.stdname.trim() !== "" && student.cgpa.trim() !== ""
  );
  try {
    for (const student of students) {
      if (student._id) {
        // If _id is present, update the existing document
        await schemas.findByIdAndUpdate(student._id, student, {
          new: true,
          upsert: true,
        });
      } else {
        // Otherwise, create a new document
        const newStudent = new schemas(student);
        await newStudent.save();
      }
    }

    res.status(201).json({ message: "Students data saved successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

const getFirstYearBtechEngineeringData = async (req, res, year) => {
  try {
    const schema = getSchema(year);
    const students = await schema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearBtechEngineeringData, saveFirstYearBtechEngineeringData };


