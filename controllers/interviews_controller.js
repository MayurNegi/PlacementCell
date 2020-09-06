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
        // result_status: "",
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

module.exports.selectResult = async function (req, res) {
  try {
    let interviewId = await Interview.findOne({ _id: req.body.interview_id });

    await Interview.findByIdAndUpdate(interviewId, {
      result_status: req.body.result_status,
    });

    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
