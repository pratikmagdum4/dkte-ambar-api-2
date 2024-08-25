import {FirstYearBtechEngineeringModel} from "../../../../models/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringModel.js";
import {SecondYearBtechEngineeringModel} from "../../../../models/StudentAchievements/Courses/BtechEngineering/SecondYearBtechEngineeringModel.js";
import {ThirdYearBtechEngineeringModel} from "../../../../models/StudentAchievements/Courses/BtechEngineering/ThirdYearBtechEngineeringModel.js";
import {FourthYearBtechEngineeringModel} from "../../../../models/StudentAchievements/Courses/BtechEngineering/FourthYearBtechEngineeringModel.js";
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
    
  // Filter out students with empty fields
  // students = students.filter(
  //   (student) => student.stdname.trim() !== "" && student.cgpa.trim() !== ""
  // );
  try {
    const { dept } = req.params;
    const schemas = getSchema(year);
  const savedStudents = []
    for (const student of students) {
      const {_id,rank,
          stdname,
          cgpa,
          dept} = student;
      if (_id) {
        // If _id is present, update the existing document
        let  updatedStudent = await schemas.findByIdAndUpdate(
          _id,
          { rank, stdname, cgpa, dept },
          {
            new: true,
            upsert: true,
          }
        );
        savedStudents.push(updatedStudent);
      } else {
        // Otherwise, create a new document
        const newStudent = new schemas({ rank, stdname, cgpa, dept });
        console.log("The new is ",newStudent);
        const savedStudent =
        await  newStudent.save();
        savedStudents.push(savedStudent);
      }
    }
      res.status(200).send(savedStudents);
// res.status(200).json({ message: "Students data saved successfully" });
   
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

const getFirstYearBtechEngineeringData = async (req, res, year) => {
  try {
    const schema = getSchema(year);
    const students = await schema.find();
    res.status(200).send(students);
  
  } catch (err) {
      console.log("The error is ", err);
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearBtechEngineeringData, saveFirstYearBtechEngineeringData };


