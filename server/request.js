import express from "express";
const Router = express.Router();
import { OAuth2Client } from "google-auth-library";
import { config } from "dotenv";
config();

Router.post("/", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://notifybear.com");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = "https://notifybear-waitlist.onrender.com/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/youtube.readonly"
    ],
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
});

export default Router;
