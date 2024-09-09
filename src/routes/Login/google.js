// routes/login/google.js
import express from "express";
import passport from "passport";

const router = express.Router();

// Initiate Google OAuth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const { token, clerk } = req.user;
    // Redirect to frontend with token or return the token
    res.redirect(`/login/success?token=${token}&role=clerk`);
  }
);

export default router;
