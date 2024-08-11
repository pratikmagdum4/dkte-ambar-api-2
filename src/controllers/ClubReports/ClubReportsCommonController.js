import ClubReportsAcsesSchema from "../../models/ClubReports/ClubReportsAcsesModel.js";
import ClubReportsAisaSchema from "../../models/ClubReports/ClubReportsAisaModel.js";
import ClubReportsMesaSchema from "../../models/ClubReports/ClubReportsMesaModel.js";
import ClubReportsComsaSchema from "../../models/ClubReports/ClubReportsComsaModel.js";
import ClubReportsEesaSchema from "../../models/ClubReports/ClubReportsEesaModel.js";
import ClubReportsIetSchema from "../../models/ClubReports/ClubReportsIetModel.js";
import ClubReportsTaimuSchema from "../../models/ClubReports/ClubReportsTaimuModel.js";
import ClubReportsCesaSchema from "../../models/ClubReports/ClubReportsCesaModel.js";

const schemas = {
  acses: ClubReportsAcsesSchema,
  aisa: ClubReportsAisaSchema,
  mesa: ClubReportsMesaSchema,
  comsa: ClubReportsComsaSchema,
  eesa: ClubReportsEesaSchema,
  iet: ClubReportsIetSchema,
  cesa: ClubReportsCesaSchema,
  taimu: ClubReportsTaimuSchema,
};

const getSchema = (clubName) => {
  return schemas[clubName];
};

const createClubReports = async (req, res, clubName) => {
  try {
    const schema = getSchema(clubName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }
    const{dept} = req.params;

    const achievementsArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementsArray) {
      const {_id, info } = achievement;

     if (_id) {
       let existingAchievement = await schema.findByIdAndUpdate(
         _id,
         {  info },
         { new: true }
       );
       savedAchievements.push(existingAchievement);
     } else {
       const newAchievement = new schema({ info, dept });
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

const getClubReports = async (req, res, clubName) => {
  try {
    const schema = getSchema(clubName);
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

const deleteClubReports = async (req, res, clubName) => {
  const { id } = req.params;
  try {
    const schema = getSchema(clubName);
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

const updateClubReports = async (req, res, clubName) => {
  const { id } = req.params;
  const { info } = req.body;
  try {
    const schema = getSchema(clubName);
    if (!schema) {
      return res.status(400).json({ message: "Invalid club name" });
    }

    const updatedAchievement = await schema.findByIdAndUpdate(
      id,
      {  info },
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

export {
  createClubReports,
  getClubReports,
  updateClubReports,
  deleteClubReports,
};
