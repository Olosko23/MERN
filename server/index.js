const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ mssg: "I'm here from the backend in express" });
});

app.get("/dogs", async (req, res) => {
  //const allDogs = await Dog.find();
  return res.status(200).json("DOGGGSS");
});

app.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const dog = await Dog.findById(id);
  return res.status(201).json(dog);
});

app.post("/dogs", async (req, res) => {
  const newDog = new Dog({ ...req.body });
  const insertNewDog = await newDog.save();
  return res.status(201).json(insertNewDog);
});

app.put("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  await Dog.updateOne({ id }, req.body);
  const updatedDog = await Dog.findById(id);
  return res.status(200).json(updatedDog);
});

app.delete("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const deletedDog = await Dog.findByIdAndDelete(id);
  return res.status(200).json(deletedDog);
});

app.listen(process.env.PORT, () => {
  console.log("I'm here from the backend using dotenv to mask the port number");
});
