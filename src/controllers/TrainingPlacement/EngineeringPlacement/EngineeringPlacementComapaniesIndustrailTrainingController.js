import EngineeringCompaniesIndustrialTrainingModel from "../../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesIndustrailTrainingModel.js";

const createEngineeringCompaniesIndustrialTraining = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const { _id,category, studentcount } =
        achievement;
      if(_id)
     {
      let existingAchievement =
        await EngineeringCompaniesIndustrialTrainingModel.findByIdAndUpdate(
          _id,
          { category, studentcount },
          { new: true }
        );
      
      savedAchievements.push(existingAchievement);
    
      } else {
        //create new
        const newAchievement = new EngineeringCompaniesIndustrialTrainingModel({
          category,
          studentcount,
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

const getEngineeringCompaniesIndustrialTraining = async (req, res) => {
  try {
    const achievement =
      await EngineeringCompaniesIndustrialTrainingModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteEngineeringCompaniesIndustrialTraining = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await EngineeringCompaniesIndustrialTrainingModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateEngineeringCompaniesIndustrialTraining = async (req, res) => {
  const { id } = req.params;
  const { category, studentcount } = req.body;

  try {
    const updatedAchievement =
      await EngineeringCompaniesIndustrialTrainingModel.findByIdAndUpdate(
        id,
        {
          category,
          studentcount,
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
  createEngineeringCompaniesIndustrialTraining,
  getEngineeringCompaniesIndustrialTraining,
  deleteEngineeringCompaniesIndustrialTraining,
  updateEngineeringCompaniesIndustrialTraining,
};
