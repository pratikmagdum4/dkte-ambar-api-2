
import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "../config/s3.js";


const authenticate = (req, res, next) => {
 
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }
  next();
};



const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "private",
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + file.originalname);
    },
  }),
});

export { upload,authenticate};

// module.exports = authenticate;
