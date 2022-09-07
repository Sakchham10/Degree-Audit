const mongoose = require("mongoose");

const degreeModel = new mongoose.Schema({
  communication: {
    type: Array,
  },
  americanHistoryI: {
    type: Array,
  },
  americanHistoryII: {
    type: Array,
  },
  polSciI: {
    type: Array,
  },
  polSciII: {
    type: Array,
  },
  arts: {
    type: Array,
  },
  lpc: {
    type: Array,
  },
  socialSci: {
    type: Array,
  },
  tecm: {
    type: Array,
  },
  mathCore: {
    type: Array,
  },
  lifeSci: {
    type: Array,
  },
  req: {
    type: Array,
  },
  core: {
    type: Array,
  },
  breadth: {
    type: Array,
  },
  electives: {
    type: Array,
  },
  capstone: {
    type: Array,
  },
});

const Degrees = mongoose.model("Degree", degreeModel);
module.exports = Degrees;
