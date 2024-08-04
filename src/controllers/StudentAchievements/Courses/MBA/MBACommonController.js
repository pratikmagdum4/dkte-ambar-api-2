import mbaSchema from "../../../../models/StudentAchievements/Courses/MBA/MBAModel.js";
// import MBASecondYearModel from "../../../../models/StudentAchievements/Courses/MBA/MBASecondYearModel.js";


// const schemas = {
//   first: MBAFirstYearModel,
//   second: MBASecondYearModel,
 
// };

// const getSchema = (year) => {

//     return schemas[year];
// }


const saveFirstYearMbaData = async (req, res) => {
  let students = req.body.students;
    // const schemas = getSchema(year);
  // Filter out students with empty fields
  students = students.filter(
    (student) => student.stdname.trim() !== "" && student.cgpa.trim() !== ""
  );
  try {
    for (const student of students) {
      if (student._id) {
        // If _id is present, update the existing document
        await mbaSchema.findByIdAndUpdate(student._id, student, {
          new: true,
          upsert: true,
        });
      } else {
        // Otherwise, create a new document
        const newStudent = new mbaSchema(student);
        await newStudent.save();
      }
    }

    res.status(201).json({ message: "Students data saved successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

const getFirstYearMbaData = async (req, res) => {
  try {

    // const schema = getSchema(year);
    const students = await mbaSchema.find();
    console.log("The students ",students);
    res.json(students);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearMbaData, saveFirstYearMbaData };


