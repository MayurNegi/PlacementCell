const Company = require("../models/company");

module.exports.page = async function (req, res) {
  try {
    let companies = await Company.find({});

    return res.render("company", {
      title: "company",
      companies: companies,
    });
  } catch (err) {
    console.log("err", err);
    return;
  }
};

module.exports.create = async function (req, res) {
  try {
    let company = await Company.create(req.body);

    return res.redirect("back");
  } catch (err) {
    console.log("err", err);
    return;
  }
};
