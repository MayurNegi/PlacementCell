const Interview = require("../models/interview");
const Student = require("../models/student");
const Company = require("../models/company");

module.exports.page = async function (req, res) {
  try {
    let interviews = await Interview.find({})
      .populate("student")
      .populate("company");

    return res.render("interview", {
      title: "Interview",
      interviews: interviews,
    });
  } catch (err) {
    console.log("err", err);
    return;
  }
};

module.exports.create = async function (req, res) {
  try {
    let student = await Student.findOne({ name: req.body.student });
    let company = await Company.findOne({ name: req.body.company });

    if (student && company) {
      let interview = Interview.create({
        student: student._id,
        company: company._id,
        date: req.body.date,
      });
    } else {
      console.log("student/company name is incorrect");
    }
    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
