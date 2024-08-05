import TextilePlacementInternationalPlacementModel from "../../../models/TrainingPlacement/TextilePlacement/TextilePlacementInternationalPlacementModel.js";

const createTextilePlacementInternationalPlacement = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const {_id, minmaxavg, info } = achievement;
      if (_id) {
        let existingAchievement =
          await TextilePlacementInternationalPlacementModel.findByIdAndUpdate(
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
        const newAchievement = new TextilePlacementInternationalPlacementModel({
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

const getTextilePlacementInternationalPlacement = async (req, res) => {
  try {
    const achievement =
      await TextilePlacementInternationalPlacementModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTextilePlacementInternationalPlacement = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await TextilePlacementInternationalPlacementModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateTextilePlacementInternationalPlacement = async (req, res) => {
  const { id } = req.params;
  const { minmaxavg, info } = req.body;

  try {
    const updatedAchievement =
      await TextilePlacementInternationalPlacementModel.findByIdAndUpdate(
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
  createTextilePlacementInternationalPlacement,
  getTextilePlacementInternationalPlacement,
  deleteTextilePlacementInternationalPlacement,
  updateTextilePlacementInternationalPlacement,
};
