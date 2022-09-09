const Degree = require("./Catalog");
const mongoose = require("mongoose");
const Semesters = require("./Semester");

const studentModel = new mongoose.Schema({
  first: {
    type: String,
    required: "First Name is required",
  },
  last: {
    type: String,
    required: "Last Name is required",
  },
  username: {
    type: String,
    required: "User Name is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  curr_degree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Degree,
  },

  curr_semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Semesters,
  },
});

const Students = mongoose.model("Student", studentModel);
module.exports = Students;
