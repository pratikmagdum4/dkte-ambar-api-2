import MainEventsAlunmiSchema from "../../models/MainEvents/MainEventsAlunmiModel.js";
import MainEventsCareerSchema from "../../models/MainEvents/MainEventsCareerModel.js";
import MainEventsEnterdevopSchema from "../../models/MainEvents/MainEventsEnterdevopModel.js";
import MainEventsTechsymposiumSchema from "../../models/MainEvents/MainEventsTechsymposiumModel.js";
import MainEventsTestvisionSchema from "../../models/MainEvents/MainEventsTestvisionModel.js";


const schemas = {
  alunmi: MainEventsAlunmiSchema,
  career: MainEventsCareerSchema,
  enterdevop: MainEventsEnterdevopSchema,
  techsym: MainEventsTechsymposiumSchema,
  testvis: MainEventsTestvisionSchema,
 
};

const getSchema = (eventName) => {
  return schemas[eventName];
};

const createMainEvent = async (req, res, eventName) => {
  try {
    const schema = getSchema(eventName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }

    const achievementsArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementsArray) {
      const { _id,srno, info } = achievement;

      if (_id) {
        let existingAchievement = await schema.findByIdAndUpdate(
          _id,
          { srno, info },
          { new: true }
        );
        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new schema({ srno, info });
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

const getMainEvent = async (req, res, eventName) => {
  try {
    const schema = getSchema(eventName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }

    const achievements = await schema.find();
    res.status(200).send(achievements);
  } catch (error) {
    console.error("Error retrieving achievements:", error);
    res.status(400).send(error);
  }
};

const deleteMainEvent = async (req, res, eventName) => {
  const { id } = req.params;
  try {
    const schema = getSchema(eventName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }

    const achievement = await schema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    console.error("Error deleting achievement:", error);
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateMainEvent = async (req, res, eventName) => {
  const { id } = req.params;
  const { srno, info } = req.body;
  try {
    const schema = getSchema(eventName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }

    const updatedAchievement = await schema.findByIdAndUpdate(
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
    console.error("Error updating achievement:", error);
    res.status(500).json({ message: "Error updating achievement" });
  }
};

export { createMainEvent, getMainEvent, updateMainEvent, deleteMainEvent };
