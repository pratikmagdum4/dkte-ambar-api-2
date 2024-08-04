import {
  saveFirstYearBtechTextileData,
  getFirstYearBtechTextileData,
} from "./BtechCgpaTextileCommonController.js";


const handleBtechTextileCgpa = async (req, res, action) => {
  const { year } = req.params;

  switch (action) {
    case "get":
      await getFirstYearBtechTextileData(req, res, year);
      break;
    case "save":
      await saveFirstYearBtechTextileData(req, res, year);
      break;
    default:
      res.status(400).json({ message: "Invalid action" });
  }
};

export { handleBtechTextileCgpa };