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
import { CreateImageSubmission, deleteImageById, getImgUploads, getVerifiedImageByType, UpdateImageVerification } from "../controllers/Submission/ImageSubmissionController.js";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import {
  CreateArticleSubmission,
  getArticles,
  getVerifiedArticle,
  UpdateArticleVerification,
  deleteArticle,
} from "../controllers/Submission/ArticleSubmissionController.js";
import { CreateTechArticleSubmission, getTechArticles, getVerifiedTechArticle, UpdateTechArticleVerification,deleteTechnicalArticle } from "../controllers/Submission/TechnicalArticleSubmissionController.js";
import ImageSubmissionSchema from "../models/Submission/ImageSubmissionModel.js";
import FacultyAchievementPatentGrantSchema from "../models/FacultyAchievements/facultyAchievementPatentGrantModel.js";
import FacultyAchievementBookPublicationSchema from "../models/FacultyAchievements/facultyAchievementBookPublicationModel.js";

import BtechCgpa from "../routes/StudentAchievements/Courses/BtechEngineering/BtechCgpaRoutes.js";
import BtechTextileCgpa from "../routes/StudentAchievements/Courses/BtechTextile/BtechCgpaTextileRoutes.js";
import DiplomaCgpa from "./StudentAchievements/Courses/Diploma/DiplomaCGPARoutes.js";
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
import {
  FirstYearDiplomaTMModel,
  FirstYearDiplomaFCModel,
  FirstYearDiplomaTTModel,
} from "../models/StudentAchievements/Courses/Diploma/DiplomaFirstYearModel.js";

import {
  FirstYearMBAModel,
  SecondYearMBAModel,
} from "../models/StudentAchievements/Courses/MBA/MBAModel.js";

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

import BtechEngineeringCGPARoutes from "../routes/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringRoutes.js";
import BtechTextileCGPARoutes from "../routes/StudentAchievements/Courses/BtechTextile/BtechCgpaTextileRoutes.js";
import DiplomaCGPARoutes from "../routes/StudentAchievements/Courses/Diploma/DiplomaCGPARoutes.js";
import MBACGPARoutes from "../routes/StudentAchievements/Courses/MBA/MbaRoutes.js";
import { SecondYearDiplomaFCModel, SecondYearDiplomaTMModel, SecondYearDiplomaTTModel } from "../models/StudentAchievements/Courses/Diploma/DiplomaSecondYearModel.js";

import authRoutes from "./Login/autosign.js";
import ilovepdfSDK from "ilovepdf-sdk";
import path from "path";

import passport from "passport";
import ILovePDF from "@ilovepdf/ilovepdf-nodejs";
import fs from "fs";
const router = Router();
router.use(passport.initialize());
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Set up multer for file uploads
const upload2 = multer({ dest: "uploads/" }); // Directory to store uploaded files
process.env.I_LOVE_PUB, process.env.I_LOVE_PRI;
const projectPublicId = process.env.I_LOVE_PUB;
const secretKey = process.env.I_LOVE_PRI;

const sdk = new ilovepdfSDK(projectPublicId, secretKey);

// Route to convert Word to PDF
router.post(
  "/convert-docx-to-pdf",
  upload2.single("content"),
  async (req, res) => {
    const inputFile = req.file.path;
    const outputFile = path.resolve(__dirname, "outputs", "output.pdf");

    try {
      const task = await sdk.createTask("officepdf");
      await task.addFile(inputFile);
      await task.process();
      await task.download(outputFile);

      // Send the converted file back to the client
      res.download(outputFile, "output.pdf", (err) => {
        if (err) {
          console.error("Error downloading the file:", err);
          res.status(500).send("Error downloading the file");
        }
        // Clean up files
        fs.unlinkSync(inputFile);
        fs.unlinkSync(outputFile);
      });
    } catch (error) {
      console.error("Error converting DOCX to PDF:", error);
      res.status(500).send("Error converting DOCX to PDF");
    }
  }
);

// Route to convert PDF to Word
// router.post(
//   "/convert-pdf-to-docx",
//   upload2.single("pdfFile"),
//   async (req, res) => {
//     const inputFile = req.file.path;
//     const outputFile = path.resolve(__dirname, "outputs", "output.docx");

//     try {
//       const task = await sdk.createTask("pdftoword");
//       await task.addFile(inputFile);
//       await task.process();
//       await task.download(outputFile);

//       // Send the converted file back to the client
//       res.download(outputFile, "output.docx", (err) => {
//         if (err) {
//           console.error("Error downloading the file:", err);
//           res.status(500).send("Error downloading the file");
//         }
//         // Clean up files
//         fs.unlinkSync(inputFile);
//         fs.unlinkSync(outputFile);
//       });
//     } catch (error) {
//       console.error("Error converting PDF to DOCX:", error);
//       res.status(500).send("Error converting PDF to DOCX");
//     }
//   }
// );




// const upload2 = multer({ dest: "uploads/" });
// // import ILovePDF from "@ilovepdf/ilovepdf-nodejs";
// const instance = new ILovePDF(process.env.I_LOVE_PUB, process.env.I_LOVE_PRI);

// router.post("/convert-pdf", upload2.single("pdfFile"), async (req, res) => {
//   try {
//     console.log("Starting PDF conversion");

//     const task = instance.newTask("officepdf");
//     await task.addFile(req.file.path);
//     const result = await task.execute(); // API request is made here

//     const downloadPath = path.join("converted", `${req.file.filename}.docx`);
//     await result.download(downloadPath);

//     res.download(downloadPath, "converted_file.docx", (err) => {
//       if (err) throw err;

//       // Cleanup files after download
//       fs.unlinkSync(req.file.path);
//       fs.unlinkSync(downloadPath);
//     });
//   } catch (error) {
//     console.error("Conversion error:", error);
//     res.status(500).send("An error occurred during the conversion process");
//   }
// });


router.use("/api/auth", authRoutes);
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
    contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically setting the correct content type
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
    { name: "contentPdf", maxCount: 1 },
    { name: "selfImage", maxCount: 1 },
  ]),
  CreateArticleSubmission
);
router.use("/article/get", getArticles);
router.use("/article/getverified", getVerifiedArticle);
router.use("/article/delete/:id", deleteArticle);
router.use("/technical/getverified", getVerifiedTechArticle);
router.use("/imgupload/getverified", getVerifiedImageByType);

router.use("/technical/get", getTechArticles);
router.use("/technical/delete/:id", deleteTechnicalArticle);
router.use("/imgupload/get", getImgUploads);
router.use("/imgupload/delete/:id", deleteImageById);
router.use(
  "/submit/technical",
  upload.fields([
    { name: "content", maxCount: 1 },
    { name: "contentPdf", maxCount: 1 },
    { name: "selfImage", maxCount: 1 },
  ]),
  CreateTechArticleSubmission
);


router.use("/article/verify/:id", UpdateArticleVerification);
router.use("/imgupload/verify/:id", UpdateImageVerification);
router.use("/technical/verify/:id", UpdateTechArticleVerification);



router.get("/progress", async (req, res) => {
  try {
   const DiplomaClerk =
     (await FirstYearDiplomaTMModel.countDocuments()) +
     (await FirstYearDiplomaFCModel.countDocuments()) +
     (await FirstYearDiplomaTTModel.countDocuments()); 
     (await SecondYearDiplomaTMModel.countDocuments()) +
       (await SecondYearDiplomaFCModel.countDocuments()) +
       (await SecondYearDiplomaTTModel.countDocuments()); 

   const MBAClerk =
     (await FirstYearMBAModel.countDocuments()) +
     (await SecondYearMBAModel.countDocuments());
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


router.use("/clerk", ClerkProgressTrackingRoutes);
router.use("/admin/clerk", AdminNotificationEmail);

router.use("/data", AdminProfileRoutes);
router.use("/data", ClerkProfileRoutes);

router.use("/admin",AdminResetPassword);
router.use("/clerk",ClerkResetPassword);


router.use("/studentscgpa/engi", BtechEngineeringCGPARoutes);
router.use("/studentscgpa/textile", BtechTextileCGPARoutes);
router.use("/studentscgpa/diploma", DiplomaCGPARoutes);
router.use("/studentscgpa/mba", MBACGPARoutes);


export default router;
