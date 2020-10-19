const express = require("express");
const app = express();
const port = process.env.PORT | 5700;
const admin = require("./controller/adminController");

const path = require("path");

app.use("/admin", admin);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, () => console.log(`${port}...listening`));
