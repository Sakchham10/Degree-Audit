const Degree = require("./Degree");
const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  curr_degree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Degree,
  },
});

const Students = mongoose.model("Student", studentModel);
module.exports = Students;
