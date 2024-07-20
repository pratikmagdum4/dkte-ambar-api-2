import {
  createAchievement,
  getAchievements,
  deleteAchievement,
  updateAchievement,
} from "../controller.js";
// import FacultyAchievementOtherSpecial from "../../models/FacultyAchivement/facultyAchievementOtherSpecialModel.js";
import FacultyAchievementPaperPresentationSchema from "../../models/FacultyAchievements/facultyAchievementPaperPresentationModel.js";

const createFacultyAchievementPaperPresentation = async (req, res) => {
  await createAchievement(FacultyAchievementPaperPresentationSchema, req, res);
};

const getFacultyAchievementsPaperPresentation = async (req, res) => {
  await getAchievements(FacultyAchievementPaperPresentationSchema, req, res);
};

const deleteFacultyAchievementPaperPresentation = async (req, res) => {
  await deleteAchievement(FacultyAchievementPaperPresentationSchema, req, res);
};

const updateFacultyAchievementPaperPresentation = async (req, res) => {
  await updateAchievement(FacultyAchievementPaperPresentationSchema, req, res);
};

export {
  createFacultyAchievementPaperPresentation,
  getFacultyAchievementsPaperPresentation,
  deleteFacultyAchievementPaperPresentation,
  updateFacultyAchievementPaperPresentation,
};
