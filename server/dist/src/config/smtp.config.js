"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const transporter = (0, nodemailer_1.createTransport)({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "sh604780@gmail.com",
        pass: "shahid786",
    },
    secure: true,
});
exports.default = transporter;
