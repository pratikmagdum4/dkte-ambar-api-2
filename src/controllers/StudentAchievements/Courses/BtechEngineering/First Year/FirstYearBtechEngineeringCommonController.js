import FirstYearBtechEngineeringModel from "../../../../../models/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringModel.js";

const saveFirstYearBtechEngineeringData = async (req, res) => {
  let students = req.body.students;
console.log("in save")
  // Filter out students with empty fields
  students = students.filter(
    (student) => student.stdname.trim() !== "" && student.cgpa.trim() !== ""
  );
  try {
    for (const student of students) {
      if (student._id) {
        // If _id is present, update the existing document
        await FirstYearBtechEngineeringModel.findByIdAndUpdate(
          student._id,
          student,
          { new: true, upsert: true }
        );
      } else {
        // Otherwise, create a new document
        const newStudent = new FirstYearBtechEngineeringModel(student);
        await newStudent.save();
      }
    }

    res.status(201).json({ message: "Students data saved successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

const getFirstYearBtechEngineeringData = async (req, res) => {
  try {
    console.log("in get");
    const students = await FirstYearBtechEngineeringModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getFirstYearBtechEngineeringData, saveFirstYearBtechEngineeringData };
