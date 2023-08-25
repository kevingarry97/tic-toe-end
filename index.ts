import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import GameRoute from "./routes/games";
import bodyParser from "body-parser";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

mongoose
  .connect(
    String(process.env.MONGO_URL)
  )
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error) => console.log(error));

app.use(cors({ origin: '*', credentials: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/api", GameRoute);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
