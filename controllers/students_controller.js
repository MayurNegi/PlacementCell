const Student = require("../models/student");

module.exports.page = async function (req, res) {
  try {
    let students = await Student.find({});

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

    console.log(student);

    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
