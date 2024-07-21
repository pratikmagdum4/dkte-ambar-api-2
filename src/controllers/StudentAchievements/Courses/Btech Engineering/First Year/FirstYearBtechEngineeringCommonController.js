import FirstYearBtechEngineeringModel from "../../../../../models/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringModel.js";

const saveFirstYearBtechEngineeringData = async (req, res) => {
  try {
    const departmentDataArray = req.body.departments;
    console.log("The dep",departmentDataArray)
    if (
      !Array.isArray(departmentDataArray) ||
      departmentDataArray.length === 0
    ) {
      return res.status(400).json({ message: "No data to save" });
    }

    const savedDepartments = [];

    for (const departmentData of departmentDataArray) {
      const { rank, stdname, cgpa } = departmentData;

      let existingDepartmentData = await FirstYearBtechEngineeringModel.findOne(
        {
          rank,
          stdname,
          cgpa,
        }
      );

      if (existingDepartmentData) {
        savedDepartments.push(existingDepartmentData);
      } else {
        const newDepartmentData = new FirstYearBtechEngineeringModel({
          rank,
          stdname,
          cgpa,
        });

        const savedDepartmentData = await newDepartmentData.save();
        savedDepartments.push(savedDepartmentData);
      }
    }
console.log("The saved data is ", savedDepartments)
    res
      .status(200)
      .json({ message: "Data saved successfully!", savedDepartments });
  } catch (error) {
    console.error("Error saving data", error);
    res.status(500).json({ message: "Error saving data", error });
  }
};


const getFirstYearBtechEngineeringData = async (req, res) => {
  try {
    const data = await FirstYearBtechEngineeringModel.find();
    res.status(200).json({ departments: data });
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(400).json({ message: "Error fetching data", error });
  }
};

export { getFirstYearBtechEngineeringData, saveFirstYearBtechEngineeringData };
