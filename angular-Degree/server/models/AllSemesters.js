const mongoose = require("mongoose");
const Semester = require("./Semester");

const takenSemestermodel = new mongoose.Schema({
  all: {
    semesters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester",
      },
    ],
  },
});

const takenSemester = mongoose.model("Taken", studentModel);
module.exports = takenSemester;
