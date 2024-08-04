import {
  getFirstYearMbaData, saveFirstYearMbaData 
} from "./MBACommonController.js";


const handleMbaCgpa = async (req, res, action) => {
  // const { year } = req.params;

  switch (action) {
    case "get":
      await getFirstYearMbaData(req, res);
      break;
    case "save":
      await saveFirstYearMbaData(req, res);
      break;

    default:
      res.status(400).json({ message: "Invalid action" });
  }
};

export { handleMbaCgpa };