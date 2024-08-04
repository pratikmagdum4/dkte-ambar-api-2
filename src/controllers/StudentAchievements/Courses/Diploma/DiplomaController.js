import {
  getFirstYearDiplomaData,
  saveFirstYearDiplomaData,
} from "./DiplomaCommonController.js";


const handleDiplomaCgpa = async (req, res, action) => {
  const { year } = req.params;

  switch (action) {
    case "get":
      await getFirstYearDiplomaData(req, res, year);
      break;
    case "save":
      await saveFirstYearDiplomaData(req, res, year);
      break;
    default:
      res.status(400).json({ message: "Invalid action" });
  }
};

export { handleDiplomaCgpa };