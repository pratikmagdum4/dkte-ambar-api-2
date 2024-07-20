import {
  createStudentAchievementSpecialAchievements,
  getStudentAchievementsSpecialAchievements,
  updateStudentAchievementSpecialAchievements,
  deleteStudentAchievementSpecialAchievements,
} from "./studentSpecialAchivementCommonController.js";

const handleStudentAchievementSpecialAchievements = async (
  req,
  res,
  action
) => {
  const { examType } = req.params;
  switch (action) {
    case "create":
      await createStudentAchievementSpecialAchievements(req, res, examType);
      break;
    case "get":
      await getStudentAchievementsSpecialAchievements(req, res, examType);
      break;
    case "update":
      await updateStudentAchievementSpecialAchievements(req, res, examType);
      break;
    case "delete":
      await deleteStudentAchievementSpecialAchievements(req, res, examType);
      break;
    default:
      res.status(400).send("Invalid action");
  }
};

export { handleStudentAchievementSpecialAchievements };
