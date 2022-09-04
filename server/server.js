const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bp = require("body-parser");
const Catalog = require("../src/models/Catalog");
const Student = require("../src/models/Student");
const cors = require("cors");
try {
  mongoose.connect(
    "mongodb+srv://sakchham10:gunsnroses12@cluster0.y7kgv.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database connected");
} catch (err) {
  console.log(err);
}

app.use(
  cors({
    origin: "*",
  })
);
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(express.json());

app.get("/catalog", async (req, res) => {
  const subjects = await Catalog.find({});
  res.send(subjects);
});

app.post("/addDegree/:id", async (req, res) => {
  console.log(req.body);
});

app.post("/register", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student._id);
});
app.get("/degree/:id", async (req, res) => {
  const id = req.params.id;
  const student = await student.findById(id);
  const degree = student.curr_degree;
  res.send(degree);
});
app.post("/login", async (req, res) => {
  console.log(req.body);
});

app.listen(3100, () => {
  console.log("Server connected");
});
