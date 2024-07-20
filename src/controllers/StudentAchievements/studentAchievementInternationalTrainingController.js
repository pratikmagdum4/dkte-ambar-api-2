import {
  createAchievement,
  getAchievements,
  deleteAchievement,
  updateAchievement,
} from "../controller.js";
import StudentAchievementInternationalTrainingSchema from "../../models/StudentAchievements/studentAchievementInternationalTrainingModel.js";

const createStudentAchievementInternationalTraining = async (req, res) => {
  await createAchievement(
    StudentAchievementInternationalTrainingSchema,
    req,
    res
  );
};

const getStudentAchievementInternationalTraining = async (req, res) => {
  await getAchievements(
    StudentAchievementInternationalTrainingSchema,
    req,
    res
  );
};

const deleteStudentAchievementInternationalTraining = async (req, res) => {
  await deleteAchievement(
    StudentAchievementInternationalTrainingSchema,
    req,
    res
  );
};

const updateStudentAchievementInternationalTraining = async (req, res) => {
  await updateAchievement(
    StudentAchievementInternationalTrainingSchema,
    req,
    res
  );
};

export {
  createStudentAchievementInternationalTraining,
  getStudentAchievementInternationalTraining,
  deleteStudentAchievementInternationalTraining,
  updateStudentAchievementInternationalTraining,
};
