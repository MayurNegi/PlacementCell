const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
});

const Student = mongoose.model("Student", studentSchema);

modules.export = Student;
