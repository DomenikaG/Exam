const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectMongoDB = require("./config/db.js");
const User = require("./models/User.model.js");

const app = express();
const PORT = process.env.PORT || 5000;
// --- conecting Mongoose database
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// -- get users (all)
app.get("/api/bookings", async (_req, res) => {
  const users = await User.find();

  // --- checking if we can connect to database and get the list of users
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).send("Failed to receive the user list from database");
    throw new Error("Failed to receive the user list from database");
  }
});

// -- create a new user
app.post("/api/bookings", async (req, res) => {
  const { name, email, date, time } = req.body;

  // --- checking if user model matches infmation received from req.body
  const user = await User.create({ name, email, date, time });

  // --- if User.model if correct - sending information to database
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).send("User data does not match requirements.");
    throw new Error("User data does not match requirements.");
  }
});

// -- update an exhisting user
app.put("/api/bookings/:id", async (req, res) => {
  const { id } = req.params;

  // --- checking if such user exhists
  const user = await User.findByIdAndUpdate(id, req.body);

  // --- if user exhists - updating information in the database (received from req.body)
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send(`User with id ${id} has not been found.`);
    throw new Error(`User with id ${id} has not been found.`);
  }
});

// -- delete a user
app.delete("/api/bookings/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res
      .status(404)
      .send(`User with id ${id} has not been found in the database.`);
    throw new Error(`User with id ${id} has not been found in the database.`);
  }
});

// -- get all users that have been registered on certain date
app.get("/api/bookings/:date", async (req, res) => {
  const { date } = req.params;

  const users = await User.find({ date: date });

  if (users) {
    res.status(200).json(users);
  } else {
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
