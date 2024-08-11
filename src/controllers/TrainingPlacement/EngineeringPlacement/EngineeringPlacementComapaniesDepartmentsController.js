import EngineeringCompaniesDepartmentModel from "../../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesDepartmentsModel.js";
const createEngineeringCompaniesDepartment = async (req, res) => {
  try {
    const achievementArray = req.body;
    const { dept } = req.params;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const { _id,branch, studentforcampus, recruitedstd, placementpercentage } =
        achievement;
      if(_id)
     {
      let existingAchievement =
        await EngineeringCompaniesDepartmentModel.findByIdAndUpdate(
          _id,
          { branch, studentforcampus, recruitedstd, placementpercentage },
          { new: true }
        );
      savedAchievements.push(existingAchievement);
    }
       else {
        //create new
        const newAchievement = new EngineeringCompaniesDepartmentModel({
          branch,
          studentforcampus,
          recruitedstd,
          placementpercentage,
          dept
        });
        //save
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

const getEngineeringCompaniesDepartment = async (req, res) => {
  try {
    const achievement = await EngineeringCompaniesDepartmentModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteEngineeringCompaniesDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await EngineeringCompaniesDepartmentModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateEngineeringCompaniesDepartment = async (req, res) => {
  const { id } = req.params;
  const { branch, studentforcampus, recruitedstd, placementpercentage } =
    req.body;

  try {
    const updatedAchievement =
      await EngineeringCompaniesDepartmentModel.findByIdAndUpdate(
        id,
        {
          branch,
          studentforcampus,
          recruitedstd,
          placementpercentage,
        },
        { new: true }
      );
    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({
      message: "Achievement updated successfully",
      updatedAchievement: updatedAchievement,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating achievement" });
  }
};

export {
  createEngineeringCompaniesDepartment,
  getEngineeringCompaniesDepartment,
  deleteEngineeringCompaniesDepartment,
  updateEngineeringCompaniesDepartment,
};
