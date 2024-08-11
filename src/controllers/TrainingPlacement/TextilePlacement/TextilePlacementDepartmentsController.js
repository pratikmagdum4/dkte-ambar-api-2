import TextilePlacementDepartmentModel from "../../../models/TrainingPlacement/TextilePlacement/TextilePlacementDepartmentsModel.js";

const createTextilePlacementDepartments = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    const { dept } = req.params;
    for (const achievement of achievementArray) {
      const {
        _id,
        srno,
        branch,
        studentforcampus,
        recruitedstd,
        placementpercentage,
        dept
      } = achievement;
     if (_id) {
       let existingAchievement =
         await TextilePlacementDepartmentModel.findByIdAndUpdate(
           _id,
           {
             srno,
             branch,
             studentforcampus,
             recruitedstd,
             placementpercentage,
           },
           { new: true }
         );

       savedAchievements.push(existingAchievement);
     } else {
       //create new
       const newAchievement = new TextilePlacementDepartmentModel({
         srno,
         branch,
         studentforcampus,
         recruitedstd,
         placementpercentage,
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

const getTextilePlacementDepartments = async (req, res) => {
  try {
    const achievement = await TextilePlacementDepartmentModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextilePlacementDepartments = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await TextilePlacementDepartmentModel.findByIdAndDelete(
      id
    );
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateTextilePlacementDepartments = async (req, res) => {
  const { id } = req.params;
  const { srno, branch, studentforcampus, recruitedstd, placementpercentage } =
    req.body;

  try {
    const updatedAchievement =
      await TextilePlacementDepartmentModel.findByIdAndUpdate(
        id,
        { srno, branch, studentforcampus, recruitedstd, placementpercentage },
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
  createTextilePlacementDepartments,
  getTextilePlacementDepartments,
  deleteTextilePlacementDepartments,
  updateTextilePlacementDepartments,
};
