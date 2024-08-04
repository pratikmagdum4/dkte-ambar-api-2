import TextilePlacementIndustrialTrainingModel from "../../../models/TrainingPlacement/TextilePlacement/TextilePlacementIndustrialTrainingModel.js";

const createTextilePlacementIndustrialTraining = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const { category, studentcount } = achievement;
      let existingAchievement =
        await TextilePlacementIndustrialTrainingModel.findOne({
           category, studentcount,
        });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new TextilePlacementIndustrialTrainingModel({
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

const getTextilePlacementIndustrialTraining = async (req, res) => {
  try {
    const achievement = await TextilePlacementIndustrialTrainingModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextilePlacementIndustrialTraining = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await TextilePlacementIndustrialTrainingModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateTextilePlacementIndustrialTraining = async (req, res) => {
  const { id } = req.params;
  const { category, studentcount } = req.body;

  try {
    const updatedAchievement =
      await TextilePlacementIndustrialTrainingModel.findByIdAndUpdate(
        id,
        { category, studentcount },
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
  createTextilePlacementIndustrialTraining,
  getTextilePlacementIndustrialTraining,
  deleteTextilePlacementIndustrialTraining,
  updateTextilePlacementIndustrialTraining,
};
