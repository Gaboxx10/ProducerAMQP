import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();   

import mailRoutes from "./routes/send-queue.routes.js";

const APP = express();  

APP.use(bodyParser.json());

APP.use("/nodemailer-app", mailRoutes);

export default APP;