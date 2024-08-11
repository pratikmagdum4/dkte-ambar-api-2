import TextilePlacementPackageOfferedModel from "../../../models/TrainingPlacement/TextilePlacement/TextilePlacementPackageOfferedModel.js";

const createTextilePlacementPackageOffered = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    const { dept } = req.params;
    for (const achievement of achievementArray) {
      const {_id, minmaxavg, info } = achievement;
      if (_id) {
        let existingAchievement =
          await TextilePlacementPackageOfferedModel.findByIdAndUpdate(
            _id,
            {
              minmaxavg,
              info,
            },
            { new: true }
          );

        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new TextilePlacementPackageOfferedModel({
          minmaxavg,
          info,
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

const getTextilePlacementPackageOffered = async (req, res) => {
  try {
    const achievement = await TextilePlacementPackageOfferedModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextilePlacementPackageOffered = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await TextilePlacementPackageOfferedModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateTextilePlacementPackageOffered = async (req, res) => {
  const { id } = req.params;
  const { minmaxavg, info } = req.body;

  try {
    const updatedAchievement =
      await TextilePlacementPackageOfferedModel.findByIdAndUpdate(
        id,
        { minmaxavg, info },
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
  createTextilePlacementPackageOffered,
  getTextilePlacementPackageOffered,
  deleteTextilePlacementPackageOffered,
  updateTextilePlacementPackageOffered,
};
