import FirstYearDiplomaModel from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaFirstYearModel.js";
import SecondYearDiplomaModel from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaSecondYearModel.js";
import ThirdYearDiplomaModel from "../../../../models/StudentAchievements/Courses/Diploma/DiplomaThirdYearModel.js";



const schemas = {
  first: FirstYearDiplomaModel,
  second: SecondYearDiplomaModel,
  third: ThirdYearDiplomaModel,
};

const getSchema = (year) => {

    return schemas[year];
}


const saveFirstYearDiplomaData = async (req, res, year) => {
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

const getFirstYearDiplomaData = async (req, res, year) => {
  try {
    const schema = getSchema(year);
    const students = await schema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearDiplomaData, saveFirstYearDiplomaData };


