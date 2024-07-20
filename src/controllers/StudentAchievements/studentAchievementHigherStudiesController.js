import {
  createAchievement,
  getAchievements,
  deleteAchievement,
  updateAchievement,
} from "../controller.js";
import StudentAchievementHigherStudiesSchema from "../../models/StudentAchievements/studentAchievementHigherStudiesModel.js";

const createStudentAchievementHigherStudies = async (req, res) => {
  await createAchievement(StudentAchievementHigherStudiesSchema, req, res);
};

const getStudentAchievementHigherStudies = async (req, res) => {
  await getAchievements(StudentAchievementHigherStudiesSchema, req, res);
};

const deleteStudentAchievementHigherStudies = async (req, res) => {
  await deleteAchievement(StudentAchievementHigherStudiesSchema, req, res);
};

const updateStudentAchievementHigherStudies = async (req, res) => {
  await updateAchievement(StudentAchievementHigherStudiesSchema, req, res);
};

export {
  createStudentAchievementHigherStudies,
  getStudentAchievementHigherStudies,
  deleteStudentAchievementHigherStudies,
  updateStudentAchievementHigherStudies,
};
