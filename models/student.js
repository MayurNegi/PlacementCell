const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    batch: String,
    college: String,
    year: String,

    status: {
      type: String,
      enum: ["placed", "not_placed"],
      default: "placed",
    },

    score: {
      DSA: 0,
      web: 0,
      react: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
