const express = require("express");
const router = express.Router();
const Characters = require("../models/Characters");

router.get("/", (req, res) => {
  Characters.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/postchar", (req, res) => {
  const Character = new Characters({
    name: req.body.name,
    age: req.body.age,
    skills: req.body.skills,
    imgsrc: req.body.imgsrc,
  });

  Character.save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
