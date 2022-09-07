const mongoose = require("mongoose");

const semesterModel = new mongoose.Schema({
  subjects: {
    type: Array,
  },
  current: {
    type: Boolean,
  },
});

const Semesters = mongoose.model("Semester", semesterModel);
module.exports = Semesters;
