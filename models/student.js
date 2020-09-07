const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: "",
    batch: "",
    college: "",
    year: "",
    status: ["placed", "not_placed"],
    score: {
      DSA: 0,
      web: 0,
      react: 0,
    },
    interviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interview",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
