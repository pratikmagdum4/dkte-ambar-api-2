import TextileCompaniesNationalModel from "../../../models/TrainingPlacement/TextileCompanies/TextileCompaniesNationalModel.js";


const createTextileCompaniesNational = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const { nationalcompanies } = achievement;
      let existingAchievement = await TextileCompaniesNationalModel.findOne({
        nationalcompanies,
      });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new TextileCompaniesNationalModel({
          nationalcompanies,
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

const getTextileCompaniesNational = async (req, res) => {
  try {
    const achievement = await TextileCompaniesNationalModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextileCompaniesNational = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await TextileCompaniesNationalModel.findByIdAndDelete(
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

const updateTextileCompaniesNational = async (req, res) => {
  const { id } = req.params;
  const { nationalcompanies } = req.body;

  try {
    const updatedAchievement =
      await TextileCompaniesNationalModel.findByIdAndUpdate(
        id,
        { nationalcompanies },
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
  createTextileCompaniesNational,
  getTextileCompaniesNational,
  deleteTextileCompaniesNational,
  updateTextileCompaniesNational,
};
