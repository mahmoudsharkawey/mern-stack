const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const _PORT = 1000;
app.use(express.json());

// connect to DB
mongoose.connect(
  "mongodb+srv://houdaw761:9O18C21JS1HMUjNo@cluster0.2ryhncp.mongodb.net/?retryWrites=true&w=majority"
);

// import User model
const UserModel = require("./models/Users");

// get request 
app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// CREATE USERS
app.post("/createUsers", async (req, res) => {
   const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body);
})

app.listen(_PORT, () => {
  console.log("server is runing !");
});