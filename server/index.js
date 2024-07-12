import express from "express";
import { config } from "dotenv";
import path from "path";
import requestRouter from "./request.js";
import authRouter from "./oauth.js";
import cors from "cors";
import connectDB from "./database/db.js";

config();

const app = express();
const __dirname = path.resolve(); // This is required for correct path resolution

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/request", requestRouter);
app.use("/oauth", authRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all route to serve index.html for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
