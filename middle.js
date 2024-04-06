const express = require("express");
const app = express();
const route = express.Router();

//route file

const reqfilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please provide age");
  } else if (req.query.age < 18) {
    res.send("u r child");
  } else {
    next();
  }
};
///////////////////////

app.use(reqfilter);

route.use(reqfilter);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

route.get("/user", (req, res) => {
  res.send("Welcome to user page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.use("/", route);

app.listen(7500);
