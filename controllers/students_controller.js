const Student = require("../models/student");
const Interview = require("../models/interview");
const objectsToCsv = require("objects-to-csv");

module.exports.page = async function (req, res) {
  try {
    // let interview = await Interview.find({}).populate("student");

    let students = await Student.find({});

    // console.log("students", students);

    return res.render("student", {
      title: "student",
      students: students,
    });
  } catch (err) {
    console.log("err", err);
    return;
  }
};

module.exports.create = async function (req, res) {
  try {
    let student = await Student.create(req.body);

    console.log(req.body);

    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
