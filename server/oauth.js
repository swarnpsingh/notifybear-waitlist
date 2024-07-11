import express from "express";
import fetch from "node-fetch";
import { OAuth2Client } from "google-auth-library";
import { config } from "dotenv";
import User from "./models/user.model.js";
config();

const Router = express.Router();
let userDataCache = null;

async function getUserData(access_token) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    const text = await response.text();
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
}

async function getChannelDetails(access_token) {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=AIzaSyByfFd6QABKGXDc8iDap30z3Gu_Hkx-vp0`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: `application/json`,
        },
      }
    );
    const text = await response.text();
    const data = JSON.parse(text);
    return data.items[0];
  } catch (error) {
    console.error("Error fetching channel details:", error);
    throw new Error("Failed to fetch channel details");
  }
}

Router.get("/", async (req, res) => {
  const code = req.query.code;
  console.log("Authorization code:", code);

  try {
    const redirectUrl = "https://notifybear-waitlist.onrender.com/oauth";
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    console.info("Tokens acquired:", tokens);

    const user = oAuth2Client.credentials;
    const userData = await getUserData(user.access_token);
    // console.log("User Data", userData);
    const channelData = await getChannelDetails(user.access_token);
    // console.log("Channel Data", channelData);

    userDataCache = { ...userData, channelData };
    console.log("userDataCache", userDataCache);

    // Save or update the user in MongoDB
    let userRecord = await User.findOne({ googleId: userDataCache.sub });
    if (!userRecord) {
      userRecord = new User({
        googleId: userDataCache.sub,
        name: userDataCache.name,
        // email: userData.email,
        picture: userDataCache.picture,
        channelData: userDataCache.channelData,
      });
    }
    // else {
    //   userRecord.name = userData.name;
    //   userRecord.picture = userData.picture;
    //   userRecord.channelData = channelData;
    // }
    await userRecord.save();

    res.redirect(303, "https://notifybear.com/");
  } catch (error) {
    console.error("Error during OAuth2 login:", error);
    res.status(500).send("Internal Server Error");
  }
});

Router.get("/user", (req, res) => {
  if (userDataCache) {
    res.json(userDataCache);
  } else {
    res.status(404).send("No user data found");
  }
});

// Remove user endpoint
Router.post("/remove", async (req, res) => {
  try {
    if (userDataCache) {
      await User.findOneAndDelete({ googleId: userDataCache.sub });
    }
    userDataCache = null;
    res.status(200).send("User Remove Successfully.");
    console.log("Removed User");
  } catch (error) {
    console.error("Error during removing:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Logout endpoint
Router.post('/logout', (req, res) => {
  userDataCache = null;
  res.status(200).send('Logged out');
})

export default Router;
