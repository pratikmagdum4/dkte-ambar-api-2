import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

import BtechCgpa from "../routes/StudentAchievements/Courses/BtechEngineering/BtechCgpaRoutes.js";
import BtechTextileCgpa from "../routes/StudentAchievements/Courses/BtechTextile/BtechCgpaTextileRoutes.js";
import DiplomaCgpa from "../routes/StudentAchievements/Courses/Diploma/DiplomaRoutes.js";
import MbaCgpa from "../routes/StudentAchievements/Courses/MBA/MbaRoutes.js";


import EngineeringCompanies from "../routes/TrainingPlacement/EngineeringCompanies/EngineeringCompaniesRoutes.js";
import EngineeringPlacementComapaniesDepartments from "../routes/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesDepartmentsRoutes.js";
import EngineeringPlacementComapaniesIndustrialTraining from "../routes/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesIndustrialTrainingRoutes.js";
import EngineeringPlacementComapaniesPackageOffered from "../routes/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesPackageOfferedRoutes.js";
import TextileCompaniesInternational from "../routes/TrainingPlacement/TextileCompanies/TextileCompaniesInternationalRoutes.js";
import TextileCompaniesNational from "../routes/TrainingPlacement/TextileCompanies/TextileCompaniesNationalRoutes.js";
import TextilePlacementDepartments from "../routes/TrainingPlacement/TextilePlacement/TextilePlacementDepartmentsRoutes.js";
import TextilePlacementIndustrialTraining from "../routes/TrainingPlacement/TextilePlacement/TextilePlacementIndustrialTrainingRoutes.js";
import TextilePlacementInternationalPlacement from "../routes/TrainingPlacement/TextilePlacement/TextilePlacementInternationalPlacementRoutes.js";
import TextilePlacementPackageOffered from "../routes/TrainingPlacement/TextilePlacement/TextilePlacementPackageOfferedRoutes.js";

import StaffMembersCateCount from "../routes/StaffMembers/StaffMembersCateCountRoutes.js";
import StaffMembersCount from "../routes/StaffMembers/StaffMembersCountRoutes.js";
import StaffMembersList from "../routes/StaffMembers/StaffMembersListRoutes.js";

import AdminNotification from "../routes/Notification/AdminNotificationRoutes.js";
import AdminNotificationEmail from "../controllers/Notification/EmailSend.js";
import FirstYearDiplomaModel from "../models/StudentAchievements/Courses/Diploma/DiplomaFirstYearModel.js";
import SecondYearDiplomaModel from "../models/StudentAchievements/Courses/Diploma/DiplomaSecondYearModel.js";
import ThirdYearDiplomaModel from "../models/StudentAchievements/Courses/Diploma/DiplomaThirdYearModel.js";
import MBAModel from "../models/StudentAchievements/Courses/MBA/MBAModel.js";

import ClerkSignUpRotues from "../routes/SignUp/ClerkSignUpRoutes.js";
import AdminSignUpRotues from "../routes/SignUp/AdminSignUpRoutes.js";
// import AdminSignUpRoutes from "../routes/SignUp/AdminSignUpRoutes.js";
import AdminLoginRoutes from "../routes/Login/AdminLoginRoutes.js";
import ClerkLoginRoutes from "../routes/Login/ClerkLoginRoutes.js";

import ClerkProgressTrackingRoutes from "../routes/ClerkProgressTracking/ClerkProgressTrackingRoutes.js";
import AdminProfileRoutes from "../routes/Profiles/AdminProfile.js"
import ClerkProfileRoutes from "../routes/Profiles/ClerkProfile.js"

import AdminResetPassword from "./ResetPassword/AdminPasswordResetRoutes.js";
import ClerkResetPassword from "./ResetPassword/ClerkPasswordResetRoutes.js";


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
  "/facultyachievements/paperpresentation",
  facultyAchievementPaperPresentationRoutes
);
router.use("/facultyachievements/patentgrant", FacultyAchievementPatentGrant);
router.use(
  "/facultyachievements/trainingprogrammes",
  FacultyAchievementTrainingProgrammes
);
router.use("/facultyachievements/workshop", FacultyAchievementWorkshop);

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
  upload.fields([
    { name: "content", maxCount: 1 },
    { name: "selfImage", maxCount: 1 },
  ]),
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
  upload.fields([
    { name: "content", maxCount: 1 },
    { name: "selfImage", maxCount: 1 },
  ]),
  CreateTechArticleSubmission
);


router.use("/article/verify/:id", UpdateArticleVerification);
router.use("/imgupload/verify/:id", UpdateImageVerification);
router.use("/technical/verify/:id", UpdateTechArticleVerification);



router.get("/progress", async (req, res) => {
  try {
   const DiplomaClerk = await FirstYearDiplomaModel.countDocuments() + await SecondYearDiplomaModel.countDocuments() + await ThirdYearDiplomaModel.countDocuments() ;

   const MBAClerk = await MBAModel.countDocuments() ;
    const facultyAchievementPatentGrantCount =
      await FacultyAchievementPatentGrantSchema.countDocuments();
    const facultyAchievementBookPublicationCount =
      await FacultyAchievementBookPublicationSchema.countDocuments();
    

    res.json({
      DiplomaClerk:DiplomaClerk,
      MBAClerk:MBAClerk,
      facultyAchievementPatentGrantCount: facultyAchievementPatentGrantCount,
      facultyAchievementBookPublicationCount:
        facultyAchievementBookPublicationCount,
      // Add other models similarly
    });
  } catch (error) {
    res.status(500).send("Error fetching progress data");
  }
});



router.use("/btechcgpa", BtechCgpa);
router.use("/btechtextcgpa", BtechTextileCgpa);
router.use("/diploma", DiplomaCgpa);
router.use("/mba", MbaCgpa);

router.use("/engineering/companies", EngineeringCompanies);
router.use(
  "/engineering/placement/departments",
  EngineeringPlacementComapaniesDepartments
);
router.use(
  "/engineering/placement/industrialtraining",
  EngineeringPlacementComapaniesIndustrialTraining
);
router.use(
  "/engineering/placement/packageoffered",
  EngineeringPlacementComapaniesPackageOffered
);
router.use("/textile/companies/international", TextileCompaniesInternational);
router.use("/textile/companies/national", TextileCompaniesNational);
router.use("/textile/placement/departments", TextilePlacementDepartments);
router.use(
  "/textile/placement/industrialtraining",
  TextilePlacementIndustrialTraining
);
router.use(
  "/textile/placement/international",
  TextilePlacementInternationalPlacement
);
router.use("/textile/placement/packageoffered", TextilePlacementPackageOffered);


router.use("/staffmember/category", StaffMembersCateCount);
router.use("/staffmember/positioncount", StaffMembersCount);
router.use("/staffmember/list", StaffMembersList);


router.use("/adminnotification", AdminNotification);
router.use("/signup", ClerkSignUpRotues);
router.use("/signup", AdminSignUpRotues);
router.use("/login/admin", AdminLoginRoutes);
console.log("hi im nerer")
router.use("/login/clerk", ClerkLoginRoutes);


router.use("/progress/clerk", ClerkProgressTrackingRoutes);
router.use("/admin/clerk", AdminNotificationEmail);

router.use("/data", AdminProfileRoutes);
router.use("/data", ClerkProfileRoutes);

router.use("/admin",AdminResetPassword);
router.use("/clerk",ClerkResetPassword);
export default router;
