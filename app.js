require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConfig");
app.use(express.json());
app.use("/", userRouter);
dotenv.config();
connectDb();
app.listen(3000, console.log("listening"));