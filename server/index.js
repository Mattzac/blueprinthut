const express = require("express");
const cors = require("cors")
const faname = require("./dataset/fantasy_names_json.json");
const firstname = require("./dataset/real_firstname.json");
const lastname = require("./dataset/real_surnames.json");
const maxfname = 1000;
const maxfirstname = 99999;
const maxlastname = 99999;
const app = express();
const port = 5000;

app.use(
  cors({
    origin : "*",
  })
)

app.get("/", (req, res) => {
  res.send("Alive")
})

app.get("/all", (req, res) => {
  const namepicked = firstname[randompick(maxfirstname)].Name + " " + lastname[randompick(maxlastname)].surname
  console.log(namepicked)
  res.json({ namepicked });
});
app.get("/male", (req, res) => {
  const fnamepicked = firstname.filter( (person) => person.Sex === "M" )
  const namepicked = fnamepicked[randompick(maxfirstname)].Name + " " + lastname[randompick(maxlastname)].surname
  console.log(namepicked)
  res.json({namepicked})
});
app.get("/female", (req, res) => {
  const fnamepicked = firstname.filter( (person) => person.Sex === "F" )
  const namepicked = fnamepicked[randompick(maxfirstname)].Name + " " + lastname[randompick(maxlastname)].surname
  console.log(namepicked)
  res.json({namepicked})
});
app.get("/fantasy", (req, res) => {
  const namepicked = faname[randompick(maxfname)].first_name + " " + faname[randompick(maxfname)].last_name
  res.json({ namepicked });
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});

const randompick = (max) => {
  return Math.floor(Math.random() * max);
};