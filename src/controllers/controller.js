const createAchievement = async (Model, req, res) => {
  try {
    const achievementsArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { srno, info } = achievement;
      let existingAchievement = await Model.findOne({ srno, info });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new Model({ srno, info });
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

const getAchievements = async (Model, req, res) => {
  try {
    const achievements = await Model.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteAchievement = async (Model, req, res) => {
  const { id } = req.params;
  try {
    const achievement = await Model.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateAchievement = async (Model, req, res) => {
  const { id } = req.params;
  const { srno, info } = req.body;
  try {
    const updatedAchievement = await Model.findByIdAndUpdate(
      id,
      { srno, info },
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

export { createAchievement, getAchievements, deleteAchievement, updateAchievement };
