import SponsorListSchema from "../../models/SponsoresList/SponsoresListModel.js";
const createSponsorList = async (req, res) => {
  try {
    console.log("hi i m in paper controller");
    const achievementsArray = req.body;

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { _id,srno, sponsors } = achievement;
  if (_id) {
   let existingAchievement = await SponsorListSchema.findByIdAndUpdate(
     _id,
     { srno, sponsors },
     { new: true }
   );
    savedAchievements.push(existingAchievement);
  } else {
    // Create a new achievement document
    const newAchievement = new SponsorListSchema({
      srno,
      sponsors,
    });
    // Save the new achievement
    const savedAchievement = await newAchievement.save();
    savedAchievements.push(savedAchievement);
  }
    }
    // Send response
    res.status(200).send(savedAchievements);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
};

const getSponsorList = async (req, res) => {
  try {
    const achievements = await SponsorListSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    console.log("having error ");
    res.status(400).send(error);
  }
};

const deleteSponsorList = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement = await SponsorListSchema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    console.log("hi i here in delete error is ", error);
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateSponsorList = async (req, res) => {
  const { id } = req.params;
  const { srno, sponsors } = req.body;
  try {
    const updatedAchievement = await SponsorListSchema.findByIdAndUpdate(
      id,
      {
        srno,
        sponsors,
      },
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
  createSponsorList,
  getSponsorList,
  deleteSponsorList,
  updateSponsorList,
};
