import FacultyAchievement from "../../models/FacultyAchievements/facultyAchievementBookPublicationModel.js";

const createFacultyAchievementBookPublication = async (req, res) => {
  try {
    console.log("hi i m in controller");
    const achievementsArray = req.body;

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const {_id, name, title, agency, isbnno, chapter } = achievement;

       if (_id) {
         let existingAchievement = await FacultyAchievement.findByIdAndUpdate(
           _id,
           { name, title, agency, isbnno, chapter },
           { new: true }
         );

         savedAchievements.push(existingAchievement);
       } else {
         // Create a new achievement document
         const newAchievement = new FacultyAchievement({
           name,
           title,
           agency,
           isbnno,
           chapter,
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

const getFacultyAchievementsBookPublication = async (req, res) => {
  try {
    const achievements = await FacultyAchievement.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementBookPublication = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement = await FacultyAchievement.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateFacultyAchievementBookPublication = async (req, res) => {
  const { id } = req.params;
  const { name, title, agency, isbnno, chapter } = req.body;
  try {
    const updatedAchievement = await FacultyAchievement.findByIdAndUpdate(
      id,
      {
        name,
        title,
        agency,
        isbnno,
        chapter,
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
  createFacultyAchievementBookPublication,
  getFacultyAchievementsBookPublication,
  deleteFacultyAchievementBookPublication,
  updateFacultyAchievementBookPublication,
};
