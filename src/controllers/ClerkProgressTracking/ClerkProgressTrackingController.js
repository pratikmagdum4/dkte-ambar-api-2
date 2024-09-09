import SponsorListSchema from "../../models/SponsoresList/SponsoresListModel.js";
import ClubReportsAcsesSchema from "../../models/ClubReports/ClubReportsAcsesModel.js";
import ClubReportsAisaSchema from "../../models/ClubReports/ClubReportsAisaModel.js";
import ClubReportsCesaSchema from "../../models/ClubReports/ClubReportsCesaModel.js";
import ClubReportsComsaSchema from "../../models/ClubReports/ClubReportsComsaModel.js";
import ClubReportsEesaSchema from "../../models/ClubReports/ClubReportsEesaModel.js";
import ClubReportsIetSchema from "../../models/ClubReports/ClubReportsIetModel.js";
import ClubReportsMesaSchema from "../../models/ClubReports/ClubReportsMesaModel.js";
import ClubReportsTaimuSchema from "../../models/ClubReports/ClubReportsTaimuModel.js";
import FacultyAchievementBookPublicationSchema from "../../models/FacultyAchievements/facultyAchievementBookPublicationModel.js";
import FacultyAchievementOtherSpecialSchema from "../../models/FacultyAchievements/facultyAchievementOtherSpecialModel.js";
import FacultyAchievementPaperPresentationSchema from "../../models/FacultyAchievements/facultyAchievementPaperPresentationModel.js";
import FacultyAchievementPatentGrantSchema from "../../models/FacultyAchievements/facultyAchievementPatentGrantModel.js";
import FacultyAchievementTrainingProgrammesSchema from "../../models/FacultyAchievements/facultyAchievementTrainingProgrammesModel.js";
import FacultyAchievementWorkshopSchema from "../../models/FacultyAchievements/facultyAchievementWorkshopModel.js";
import StudentAchievementAppreciationPrizeSchema from "../../models/StudentAchievements/studentAchievementAppreciationPrizeModel.js";
import StudentAchievementHigherStudiesSchema from "../../models/StudentAchievements/studentAchievementHigherStudiesModel.js";
import StudentAchievementInternationalTrainingSchema from "../../models/StudentAchievements/studentAchievementInternationalTrainingModel.js";
import StudentAchievementPaperProjectSchema from "../../models/StudentAchievements/studentAchievementPaperProjectModel.js";
import StudentAchievementSpecialAchievementsGateSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsGateModel.js";
import StudentAchievementSpecialAchievementsGreSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsGreModel.js";
import StudentAchievementSpecialAchievementsNiftSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsNiftModel.js";
import StudentAchievementSpecialAchievementsToeflSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsToeflModel.js";
import MainEventsAlunmiSchema from "../../models/MainEvents/MainEventsAlunmiModel.js";
import MainEventsCareerSchema from "../../models/MainEvents/MainEventsCareerModel.js";
import MainEventsEnterdevopSchema from "../../models/MainEvents/MainEventsEnterdevopModel.js";
import MainEventsTechsymposiumSchema from "../../models/MainEvents/MainEventsTechsymposiumModel.js";
import MainEventsTestvisionSchema from "../../models/MainEvents/MainEventsTestvisionModel.js";
import StaffMembersCateCountModel from "../../models/StaffMembers/StaffMembersCateCountModel.js";
import StaffMembersCountModel from "../../models/StaffMembers/StaffMembersCountModel.js";
import StaffMembersListModel from "../../models/StaffMembers/StaffMembersListModel.js";
import EngineeringCompaniesDepartmentModel from "../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesDepartmentsModel.js";
import EngineeringCompaniesIndustrialTrainingModel from "../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesIndustrailTrainingModel.js";
import EngineeringCompaniesModel from "../../models/TrainingPlacement/EngineeringCompanies/EngineeringCompaniesModel.js";
import EngineeringCompaniesPackageOfferedModel from "../../models/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesPackageOfferedModel.js";
import TextileCompaniesInternationalModel from "../../models/TrainingPlacement/TextileCompanies/TextileCompaniesInterNationalModel.js";
import TextileCompaniesNationalModel from "../../models/TrainingPlacement/TextileCompanies/TextileCompaniesNationalModel.js";
import TextilePlacementDepartmentModel from "../../models/TrainingPlacement/TextilePlacement/TextilePlacementDepartmentsModel.js";
import TextilePlacementIndustrialTrainingModel from "../../models/TrainingPlacement/TextilePlacement/TextilePlacementIndustrialTrainingModel.js";
import TextilePlacementInternationalPlacementModel from "../../models/TrainingPlacement/TextilePlacement/TextilePlacementInternationalPlacementModel.js";
import TextilePlacementPackageOfferedModel from "../../models/TrainingPlacement/TextilePlacement/TextilePlacementPackageOfferedModel.js";

const getClerkProgress = async (req, res) => {
  try {
    const department = req.params.department; // e.g., CSE, CSE-AIML, etc.

    const textileCompaniesNationalCount =
      await TextileCompaniesNationalModel.countDocuments({ dept: department });
    const textilePlacementDepartmentCount =
      await TextilePlacementDepartmentModel.countDocuments({
        dept: department,
      });
    const textilePlacementIndustrialTrainingCount =
      await TextilePlacementIndustrialTrainingModel.countDocuments({
        dept: department,
      });
    const textilePlacementInternationalPlacementCount =
      await TextilePlacementInternationalPlacementModel.countDocuments({
        dept: department,
      });
    const textilePlacementPackageOfferedCount =
      await TextilePlacementPackageOfferedModel.countDocuments({
        dept: department,
      });
    const sponsorListCount = await SponsorListSchema.countDocuments({
      dept: department,
    });
    const clubReportsAcsesCount = await ClubReportsAcsesSchema.countDocuments({
      dept: department,
    });
    const clubReportsAisaCount = await ClubReportsAisaSchema.countDocuments({
      dept: department,
    });
    const clubReportsCesaCount = await ClubReportsCesaSchema.countDocuments({
      dept: department,
    });
    const clubReportsComsaCount = await ClubReportsComsaSchema.countDocuments({
      dept: department,
    });
    const clubReportsEesaCount = await ClubReportsEesaSchema.countDocuments({
      dept: department,
    });
    const clubReportsIetCount = await ClubReportsIetSchema.countDocuments({
      dept: department,
    });
    const clubReportsMesaCount = await ClubReportsMesaSchema.countDocuments({
      dept: department,
    });
    const clubReportsTaimuCount = await ClubReportsTaimuSchema.countDocuments({
      dept: department,
    });
    const facultyAchievementBookPublicationCount =
      await FacultyAchievementBookPublicationSchema.countDocuments({
        dept: department,
      });
    const facultyAchievementOtherSpecialCount =
      await FacultyAchievementOtherSpecialSchema.countDocuments({
        dept: department,
      });
    const facultyAchievementPaperPresentationCount =
      await FacultyAchievementPaperPresentationSchema.countDocuments({
        dept: department,
      });
    const facultyAchievementPatentGrantCount =
      await FacultyAchievementPatentGrantSchema.countDocuments({
        dept: department,
      });
    const facultyAchievementTrainingProgrammesCount =
      await FacultyAchievementTrainingProgrammesSchema.countDocuments({
        dept: department,
      });
    const facultyAchievementWorkshopCount =
      await FacultyAchievementWorkshopSchema.countDocuments({
        dept: department,
      });
    const studentAchievementAppreciationPrizeCount =
      await StudentAchievementAppreciationPrizeSchema.countDocuments({
        dept: department,
      });
    const studentAchievementHigherStudiesCount =
      await StudentAchievementHigherStudiesSchema.countDocuments({
        dept: department,
      });
    const studentAchievementInternationalTrainingCount =
      await StudentAchievementInternationalTrainingSchema.countDocuments({
        dept: department,
      });
    const studentAchievementPaperProjectCount =
      await StudentAchievementPaperProjectSchema.countDocuments({
        dept: department,
      });
    const studentAchievementSpecialAchievementsGateCount =
      await StudentAchievementSpecialAchievementsGateSchema.countDocuments({
        dept: department,
      });
    const studentAchievementSpecialAchievementsGreCount =
      await StudentAchievementSpecialAchievementsGreSchema.countDocuments({
        dept: department,
      });
    const studentAchievementSpecialAchievementsNiftCount =
      await StudentAchievementSpecialAchievementsNiftSchema.countDocuments({
        dept: department,
      });
    const studentAchievementSpecialAchievementsToeflCount =
      await StudentAchievementSpecialAchievementsToeflSchema.countDocuments({
        dept: department,
      });
    const mainEventsAlumniCount = await MainEventsAlunmiSchema.countDocuments({
      dept: department,
    });
    const mainEventsCareerCount = await MainEventsCareerSchema.countDocuments({
      dept: department,
    });
    const mainEventsEnterdevopCount =
      await MainEventsEnterdevopSchema.countDocuments({ dept: department });
    const mainEventsTechsymposiumCount =
      await MainEventsTechsymposiumSchema.countDocuments({ dept: department });
    const mainEventsTestvisionCount =
      await MainEventsTestvisionSchema.countDocuments({ dept: department });
    const staffMembersCateCount =
      await StaffMembersCateCountModel.countDocuments({ dept: department });
    const staffMembersCount = await StaffMembersCountModel.countDocuments({
      dept: department,
    });
    const staffMembersListCount = await StaffMembersListModel.countDocuments({
      dept: department,
    });
    const engineeringCompaniesDepartmentCount =
      await EngineeringCompaniesDepartmentModel.countDocuments({
        dept: department,
      });
    const engineeringCompaniesIndustrialTrainingCount =
      await EngineeringCompaniesIndustrialTrainingModel.countDocuments({
        dept: department,
      });
    const engineeringCompaniesCount =
      await EngineeringCompaniesModel.countDocuments({ dept: department });
    const engineeringCompaniesPackageOfferedCount =
      await EngineeringCompaniesPackageOfferedModel.countDocuments({
        dept: department,
      });

    res.status(200).json({
      textileCompaniesNational: textileCompaniesNationalCount,
      textilePlacementDepartment: textilePlacementDepartmentCount,
      textilePlacementIndustrialTraining:
        textilePlacementIndustrialTrainingCount,
      textilePlacementInternationalPlacement:
        textilePlacementInternationalPlacementCount,
      textilePlacementPackageOffered: textilePlacementPackageOfferedCount,
      sponsorList: sponsorListCount,
      clubReportsAcses: clubReportsAcsesCount,
      clubReportsAisa: clubReportsAisaCount,
      clubReportsCesa: clubReportsCesaCount,
      clubReportsComsa: clubReportsComsaCount,
      clubReportsEesa: clubReportsEesaCount,
      clubReportsIet: clubReportsIetCount,
      clubReportsMesa: clubReportsMesaCount,
      clubReportsTaimu: clubReportsTaimuCount,
      facultyAchievementBookPublication: facultyAchievementBookPublicationCount,
      facultyAchievementOtherSpecial: facultyAchievementOtherSpecialCount,
      facultyAchievementPaperPresentation:
        facultyAchievementPaperPresentationCount,
      facultyAchievementPatentGrant: facultyAchievementPatentGrantCount,
      facultyAchievementTrainingProgrammes:
        facultyAchievementTrainingProgrammesCount,
      facultyAchievementWorkshop: facultyAchievementWorkshopCount,
      studentAchievementAppreciationPrize:
        studentAchievementAppreciationPrizeCount,
      studentAchievementHigherStudies: studentAchievementHigherStudiesCount,
      studentAchievementInternationalTraining:
        studentAchievementInternationalTrainingCount,
      studentAchievementPaperProject: studentAchievementPaperProjectCount,
      studentAchievementSpecialAchievementsGate:
        studentAchievementSpecialAchievementsGateCount,
      studentAchievementSpecialAchievementsGre:
        studentAchievementSpecialAchievementsGreCount,
      studentAchievementSpecialAchievementsNift:
        studentAchievementSpecialAchievementsNiftCount,
      studentAchievementSpecialAchievementsToefl:
        studentAchievementSpecialAchievementsToeflCount,
      mainEventsAlumni: mainEventsAlumniCount,
      mainEventsCareer: mainEventsCareerCount,
      mainEventsEnterdevop: mainEventsEnterdevopCount,
      mainEventsTechsymposium: mainEventsTechsymposiumCount,
      mainEventsTestvision: mainEventsTestvisionCount,
      staffMembersCate: staffMembersCateCount,
      staffMembers: staffMembersCount,
      staffMembersList: staffMembersListCount,
      engineeringCompaniesDepartment: engineeringCompaniesDepartmentCount,
      engineeringCompaniesIndustrialTraining:
        engineeringCompaniesIndustrialTrainingCount,
      engineeringCompanies: engineeringCompaniesCount,
      engineeringCompaniesPackageOffered:
        engineeringCompaniesPackageOfferedCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getClerkProgress };
