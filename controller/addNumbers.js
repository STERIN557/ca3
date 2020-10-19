const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const fs = require("fs");
const { type } = require("os");
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const checNumbers = (req, res, next) => {
  if ((Number(req.body.no1) > 0) & (Number(req.body.no2) > 0)) {
    next();
  } else {
    // do something else;
    res.status(402).json({
      message: "need to enter valid or greater than 0 value",
    });
    // res.sendStatus(402).send("Number should be greater than zero and valid!");
  }
};

router.use(checNumbers);
router.get("/", (req, res) => {
  res.render("number");
});

router.post("/", (req, res) => {
  let no1 = req.body.no1;
  let no2 = req.body.no2;
  let result = Number(no1) + Number(no2);
  res.send(`${result}`);
});
module.exports = router;
