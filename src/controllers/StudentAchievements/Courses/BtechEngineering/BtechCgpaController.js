import { saveFirstYearBtechEngineeringData,getFirstYearBtechEngineeringData } from "./BtechCgpaCommonController.js";

const handleBtechCgpa = async (req, res, action) => {
  const { year } = req.params;

  switch (action) {
    case "get":
      await getFirstYearBtechEngineeringData(req, res, year);
      break;
    case "save":
      await saveFirstYearBtechEngineeringData(req, res, year);
      break;
    default:
      res.status(400).json({ message: "Invalid action" });
  }
};

export   { handleBtechCgpa };