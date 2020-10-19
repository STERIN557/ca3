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

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.post("/", (req, res) => {
  //   console.log(req.body);

  let info = {
    name: `${req.body.name}`,
    email: `${req.body.email}`,
    phone: `${req.body.phno}`,
    city: `${req.body.city}`,
    DOB: `${req.body.birthday}`,
  };

  fs.readFile("data/employee.json", "utf-8", (err, data) => {
    if (err) throw err;
    var arrayOfObject = JSON.parse(data);
    console.log(arrayOfObject);
    arrayOfObject.employee.push(info);
    // fs.writeFile(
    //   "data/employee.json",
    //   JSON.stringify(arrayOfObject),
    //   "utf-8",
    //   function (err) {
    //     if (err) throw err;
    //     console.log("Done!");
    //   }
    // );
  });
  fs.readFile("data/employee.json", (err, data) => {
    res.render("home", { data: data });
  });
});

module.exports = router;
