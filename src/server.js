import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDB from "./db/connectToDB.js";
import routes from "./routes/index.js";
import passport from 'passport';
import fs from "fs-extra";
// import authRoutes from './routes/login/google.js';
dotenv.config();
import './config/passport.js'
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());

// Routes
// app.use("/api/auth", authRoutes);
app.use("/api", routes);


const corsOptions = {
  origin: ["https://dkte-amber-website.vercel.app"], // Your frontend's deployed URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify headers you want to allow
  credentials: true, // If using credentials like cookies
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Hello from Amber server" });
});

app.get("/auth", (req, res) => {
  res.json({ message: "Hello from Amber server in auth" });
});


fs.ensureDirSync("uploads");

app.listen(PORT, () => {
  connectToDB()
    .then(() => {
      console.log(chalk.blueBright(`Server Running on port ${PORT}`));
    })
    .catch((error) => {
      console.error(chalk.red("Failed to connect to MongoDB:", error.message));
      process.exit(1);
    });
});
