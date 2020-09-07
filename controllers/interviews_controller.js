const Interview = require("../models/interview");
const Student = require("../models/student");
const Company = require("../models/company");
const ObjectsToCsv = require("objects-to-csv");

module.exports.page = async function (req, res) {
  try {
    let interviews = await Interview.find({})
      .populate("student")
      .populate("company");

    let students = await Student.find({});

    let companies = await Company.find({});

    // console.log(interviews);

    return res.render("interview", {
      title: "Interview",
      interviews: interviews,
      students: students,
      companies: companies,
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

    let interview = await Interview.create({
      student: student._id,
      company: company._id,
      date: req.body.date,
    });

    company.students.push(student);
    company.save();
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

module.exports.downloadCSV = async function (req, res) {
  try {
    const interviews = await Interview.find({})
      .populate("student")
      .populate("company");

    console.log("downloadCSV", interviews);

    const finalData = [];

    for (interview of interviews) {
      const data = {
        Name: interview.student.name,
        Batch: interview.student.batch,
        College: interview.student.college,
        Year: interview.student.year,
        Status: interview.student.status,
        DSA_Final_Score: interview.student.score.DSA,
        web_Final_Score: interview.student.score.web,
        react_Final_Score: interview.student.score.react,
        Company: interview.company.name,
        Interview_Date: interview.date,
        Interview_Result: interview.result_status,
      };

      finalData.push(data);
    }

    data = console.log("final data", finalData);

    (async () => {
      const csv = new ObjectsToCsv(finalData);

      await csv.toDisk("./test.csv");

      console.log(await csv.toString());
    })();

    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
