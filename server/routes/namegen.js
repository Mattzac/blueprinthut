const express = require("express");
const router = express.Router();

//import datasets
const faname = require("../dataset/fantasy_names_json.json");
const firstname = require("../dataset/real_firstname.json");
const lastname = require("../dataset/real_surnames.json");

//random configs
const maxfname = 1000;
const maxfirstname = 99999;
const maxlastname = 99999;

router.get("/all", (req, res) => {
  const namepicked =
    firstname[randompick(maxfirstname)].Name +
    " " +
    lastname[randompick(maxlastname)].surname;
  console.log(namepicked);
  res.json({ namepicked });
});
router.get("/male", (req, res) => {
  const fnamepicked = firstname.filter((person) => person.Sex === "M");
  const namepicked =
    fnamepicked[randompick(maxfirstname)].Name +
    " " +
    lastname[randompick(maxlastname)].surname;
  console.log(namepicked);
  res.json({ namepicked });
});
router.get("/female", (req, res) => {
  const fnamepicked = firstname.filter((person) => person.Sex === "F");
  const namepicked =
    fnamepicked[randompick(maxfirstname)].Name +
    " " +
    lastname[randompick(maxlastname)].surname;
  console.log(namepicked);
  res.json({ namepicked });
});
router.get("/fantasy", (req, res) => {
  const namepicked =
    faname[randompick(maxfname)].first_name +
    " " +
    faname[randompick(maxfname)].last_name;
  res.json({ namepicked });
});

const randompick = (max) => {
  return Math.floor(Math.random() * max);
};

module.exports = router;
