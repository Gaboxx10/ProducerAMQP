import express from "express";

import sendToQueueController from "../controllers/sen-to-Queue.controller.js";
import mailValidate from "../middlewares/mail.validate.js";

const Router = express.Router();


Router.post("/send-mail", mailValidate, sendToQueueController);

Router.get("/", (req, res) => {
    res.json({
        message: "Welcome to Send Mail to Queue"
    });
});

export default Router;