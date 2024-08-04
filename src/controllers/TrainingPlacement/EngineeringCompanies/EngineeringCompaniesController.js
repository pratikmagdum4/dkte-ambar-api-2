import EngineeringCompaniesModel from "../../../models/TrainingPlacement/EngineeringCompanies/EngineeringCompaniesModel.js";

const createEngineeringCompanies = async (req, res) => {
  try {
    
    const achievementArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementArray) {
      const { _id,engineeringcompanies } = achievement;
       let existingAchievement;
      
    if(_id)
     {
      existingAchievement = await EngineeringCompaniesModel.findByIdAndUpdate(
        _id,
        { engineeringcompanies },
        { new: true }
      );
      console.log("hi i m herer ")
      savedAchievements.push(existingAchievement);
    }
   else {
    console.log("hi i m herer 3");
        // Create new achievement
        const newAchievement = new EngineeringCompaniesModel({
          engineeringcompanies,
        });
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

const getEngineeringCompanies = async (req, res) => {
  try {
    const achievement = await EngineeringCompaniesModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteEngineeringCompanies = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await EngineeringCompaniesModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateEngineeringCompanies = async (req, res) => {
  const { id } = req.params;
  const { engineeringcompanies } = req.body;

  try {
    const updatedAchievement =
      await EngineeringCompaniesModel.findByIdAndUpdate(
        id,
        { engineeringcompanies },
        { new: true }
      );
    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({
      message: "Achievement updated successfully",
      updatedAchievement,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating achievement" });
  }
};

export {
  createEngineeringCompanies,
  getEngineeringCompanies,
  deleteEngineeringCompanies,
  updateEngineeringCompanies,
};
