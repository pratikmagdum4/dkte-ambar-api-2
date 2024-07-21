import { Router } from "express";
import dotenv from "dotenv";
import facultyAchievementBookPublicationRoutes from "./FacultyAchievements/facultyAchievementBookPublicationRoutes.js";
import facultyAchievementPaperPublicationRoutes from "./FacultyAchievements/facultyAchievementPaperPublicationRoutes.js";
import facultyAchievementOtherSpecialRoutes from "./FacultyAchievements/facultyAchievementOtherSpecialRoutes.js";
import facultyAchievementPaperPresentationRoutes from "./FacultyAchievements/facultyAchievementPaperPresentationRoutes.js";
import FacultyAchievementPatentGrant from "./FacultyAchievements/facultyAchievementPatentGrantRoutes.js";
import FacultyAchievementTrainingProgrammes from "./FacultyAchievements/facultyAchievementTrainingProgrammesRoutes.js";
import FacultyAchievementWorkshop from "./FacultyAchievements/facultyAchievementWorkshopRoutes.js";
import StudentAchievementAppreciationPrize from "./StudentAchievements/studentAchievementAppreciationPrizeRoutes.js";
import StudentAchievementPaperProject from "./StudentAchievements/studentAchievementPaperProjectRoutes.js";
import StudentAchievementSpecialAchievements from "./StudentAchievements/studentAchievementSpecialAchievementsRoutes.js";
import StudentAchievementHigherStudies from "./StudentAchievements/studentAchievementHigherStudiesRoutes.js";
import StudentAchievementInternationalTraining from "./StudentAchievements/studentAchievementInternationalTrainingRoutes.js";
import ClubReports from "./ClubReports/ClubReportsRoutes.js";
import MainEvents from "./MainEvents/MainEventsRoutes.js";
import SponsorList from "./SponsorsList/SponsorsListRoutes.js";
import UpGraduation from "./UpGraduation/UpGraduationRoutes.js";
import ImageSubmissionRouter from "./Submission/ImageSubmissionRoutes.js";
import { CreateImageSubmission, getImgUploads, getVerifiedImageByType, UpdateImageVerification } from "../controllers/Submission/ImageSubmissionController.js";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import {
  CreateArticleSubmission,
  getArticles,
  getVerifiedArticle,
  UpdateArticleVerification,
 
} from "../controllers/Submission/ArticleSubmissionController.js";
import { CreateTechArticleSubmission, getTechArticles, getVerifiedTechArticle, UpdateTechArticleVerification } from "../controllers/Submission/TechnicalArticleSubmissionController.js";
import ImageSubmissionSchema from "../models/Submission/ImageSubmissionModel.js";
import FacultyAchievementPatentGrantSchema from "../models/FacultyAchievements/facultyAchievementPatentGrantModel.js";
import FacultyAchievementBookPublicationSchema from "../models/FacultyAchievements/facultyAchievementBookPublicationModel.js";
import FirstYearBtechEngineerinRoutes from "../routes/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringRoutes.js";


const router = Router();

// S3 Client Configuration
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "private",
    contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set the correct content type
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + file.originalname);
    },
  }),
});

// Faculty Achievement Routes
router.use(
  "/facultyachievements/bookpublication",
  facultyAchievementBookPublicationRoutes
);
router.use(
  "/facultyachievements/paperpublication",
  facultyAchievementPaperPublicationRoutes
);
router.use(
  "/facultyachievements/otherspecial",
  facultyAchievementOtherSpecialRoutes
);
router.use(
  "/facultyachievement/paperpresentation",
  facultyAchievementPaperPresentationRoutes
);
router.use("/facultyachievement/patentgrant", FacultyAchievementPatentGrant);
router.use(
  "/facultyachievement/trainingprogrammes",
  FacultyAchievementTrainingProgrammes
);
router.use("/facultyachievement/workshop", FacultyAchievementWorkshop);

// Student Achievement Routes
router.use(
  "/studentachievements/appreciationprize",
  StudentAchievementAppreciationPrize
);
router.use("/studentachievements/paperproject", StudentAchievementPaperProject);
router.use(
  "/studentachievements/specialachievements",
  StudentAchievementSpecialAchievements
);
router.use(
  "/studentachievements/higherstudies",
  StudentAchievementHigherStudies
);
router.use(
  "/studentachievements/internationaltraining",
  StudentAchievementInternationalTraining
);

// Other Routes
router.use("/clubreports", ClubReports);
router.use("/mainevents", MainEvents);
router.use("/sponsorslist", SponsorList);
router.use("/upgraduation", UpGraduation);
router.use(
  "/submit/imgupload",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "selfImage", maxCount: 1 },
  ]),
  CreateImageSubmission
);

router.use(
  "/submit/article",
  upload.single("selfImage"),
  CreateArticleSubmission
);
router.use("/article/get", getArticles);
router.use("/article/getverified", getVerifiedArticle);
router.use("/technical/getverified", getVerifiedTechArticle);
router.use("/imgupload/getverified", getVerifiedImageByType);

router.use("/technical/get", getTechArticles);
router.use("/imgupload/get", getImgUploads);
router.use(
  "/submit/technical",
  upload.single("selfImage"),
  CreateTechArticleSubmission
);


router.use("/article/verify/:id", UpdateArticleVerification);
router.use("/imgupload/verify/:id", UpdateImageVerification);
router.use("/technical/verify/:id", UpdateTechArticleVerification);



router.get("/progress", async (req, res) => {
  try {
   
    const facultyAchievementPatentGrantCount =
      await FacultyAchievementPatentGrantSchema.countDocuments();
    const facultyAchievementBookPublicationCount =
      await FacultyAchievementBookPublicationSchema.countDocuments();
    

    res.json({
      facultyAchievementPatentGrantCount: facultyAchievementPatentGrantCount,
      facultyAchievementBookPublicationCount:
        facultyAchievementBookPublicationCount,
      // Add other models similarly
    });
  } catch (error) {
    res.status(500).send("Error fetching progress data");
  }
});


router.use("/first/btech", FirstYearBtechEngineerinRoutes);


export default router;
