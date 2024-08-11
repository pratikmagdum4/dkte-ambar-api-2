import TextileCompaniesInternationalModel from "../../../models/TrainingPlacement/TextileCompanies/TextileCompaniesInterNationalModel.js";
const createTextileCompaniesInternational = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    const { dept } = req.params;
    for (const achievement of achievementArray) {
      const { _id,internationalcompanies } = achievement;
      if (_id) {
        let existingAchievement =
          await TextileCompaniesInternationalModel.findByIdAndUpdate(
            _id,
            { internationalcompanies },
            { new: true }
          );

        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new TextileCompaniesInternationalModel({
          internationalcompanies,
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

const getTextileCompaniesInternational = async (req, res) => {
  try {
    const achievement = await TextileCompaniesInternationalModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextileCompaniesInternational = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await TextileCompaniesInternationalModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateTextileCompaniesInternational = async (req, res) => {
  const { id } = req.params;
  const { internationalcompanies } = req.body;

  try {
    const updatedAchievement =
      await TextileCompaniesInternationalModel.findByIdAndUpdate(
        id,
        { internationalcompanies },
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
  createTextileCompaniesInternational,
  getTextileCompaniesInternational,
  deleteTextileCompaniesInternational,
  updateTextileCompaniesInternational,
};
