import EngineeringCompaniesPackageOfferedModel from "../../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesPackageOfferedModel.js";
const createEngineeringCompaniesPackageOffered = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const { minmaxavg, info } = achievement;
      let existingAchievement =
        await EngineeringCompaniesPackageOfferedModel.findOne({
          minmaxavg,
          info,
        });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new EngineeringCompaniesPackageOfferedModel({
          minmaxavg,
          info,
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

const getEngineeringCompaniesPackageOffered = async (req, res) => {
  try {
    const achievement = await EngineeringCompaniesPackageOfferedModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteEngineeringCompaniesPackageOffered = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await EngineeringCompaniesPackageOfferedModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateEngineeringCompaniesPackageOffered = async (req, res) => {
  const { id } = req.params;
  const { minmaxavg, info } = req.body;

  try {
    const updatedAchievement =
      await EngineeringCompaniesPackageOfferedModel.findByIdAndUpdate(
        id,
        {
          minmaxavg,
          info,
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
  createEngineeringCompaniesPackageOffered,
  getEngineeringCompaniesPackageOffered,
  deleteEngineeringCompaniesPackageOffered,
  updateEngineeringCompaniesPackageOffered,
};
