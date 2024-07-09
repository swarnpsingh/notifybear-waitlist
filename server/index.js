import express from "express";
import { config } from "dotenv";
config();
import requestRouter from "./request.js";
import authRouter from "./oauth.js";
import cors from "cors";
import connectDB from "./database/db.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/request", requestRouter);
app.use("/oauth", authRouter);

// app.use((req, res, next) => {
//   next(createError(404));
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
