import StudentAchievementAppreciationPrizeSchema from "../../models/StudentAchievements/studentAchievementAppreciationPrizeModel.js";
import {
  createAchievement,
  getAchievements,
  deleteAchievement,
  updateAchievement,
} from "../controller.js";



const createStudentAchievementAppreciationPrize = async (req, res) => {
  await createAchievement(StudentAchievementAppreciationPrizeSchema, req, res);
};

const getStudentAchievementAppreciationPrize = async (req, res) => {
  await getAchievements(StudentAchievementAppreciationPrizeSchema, req, res);
};

const deleteStudentAchievementAppreciationPrize = async (req, res) => {
  await deleteAchievement(StudentAchievementAppreciationPrizeSchema, req, res);
};

const updateStudentAchievementAppreciationPrize = async (req, res) => {
  await updateAchievement(StudentAchievementAppreciationPrizeSchema, req, res);
};

export {
  createStudentAchievementAppreciationPrize,
  getStudentAchievementAppreciationPrize,
  deleteStudentAchievementAppreciationPrize,
  updateStudentAchievementAppreciationPrize,
};

