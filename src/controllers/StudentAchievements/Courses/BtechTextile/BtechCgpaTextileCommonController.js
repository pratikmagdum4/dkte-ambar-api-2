import FirstYearBtechTextileModel from "../../../../models/StudentAchievements/Courses/BtechTextile/FirstYearBtechTextileModel.js";
import SecondYearBtechTextileModel from "../../../../models/StudentAchievements/Courses/BtechTextile/SecondYearBtechTextileModel.js";
import ThirdYearBtechTextileModel from "../../../../models/StudentAchievements/Courses/BtechTextile/ThirdYearBtechTextileModel.js";
import FourthYearBtechTextileModel from "../../../../models/StudentAchievements/Courses/BtechTextile/FourthYearBtechTextileModel.js";


const schemas = {
  first: FirstYearBtechTextileModel,
  second: SecondYearBtechTextileModel,
  third: ThirdYearBtechTextileModel,
  fourth: FourthYearBtechTextileModel,
};

const getSchema = (year) => {

    return schemas[year];
}


const saveFirstYearBtechTextileData = async (req, res,year) => {
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

const getFirstYearBtechTextileData = async (req, res, year) => {
  try {
    const schema = getSchema(year);
    const students = await schema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearBtechTextileData, saveFirstYearBtechTextileData };


