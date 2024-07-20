import {
  createClubReports,
  getClubReports,
  updateClubReports,
  deleteClubReports,
} from "./ClubReportsCommonController.js";

const handleClubReports = async (req, res, action) => {
  const { clubName } = req.params;
  switch (action) {
    case "create":
      await createClubReports(req, res, clubName);
      break;
    case "get":
      await getClubReports(req, res, clubName);
      break;
    case "update":
      await updateClubReports(req, res, clubName);
      break;
    case "delete":
      await deleteClubReports(req, res, clubName);
      break;
    default:
      res.status(400).json({ message: "Invalid action" });
  }
};
export { handleClubReports };
