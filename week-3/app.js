const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

function factorial(num) {
  let result = 0;
  for (let i = num; i > 0; i--) {
    result += i;
  }
  return result;
}

app.get("/getData", (req, res) => {
  const { number } = req.query;
  if (!number) {
    res.send("Lack of Parameter");
  } else if (!isNaN(number)) {
    res.send(`The factorial of ${number} is : ${factorial(Number(number))}`);
  } else {
    res.send("Wrong Parameter");
  }
});

app.get("/myName", (req, res) => {
  res.render("myname", { username: req.cookies.username });
});

app.get("/trackName", (req, res) => {
  const { username } = req.query;
  res.cookie("username", username);
  res.redirect("/myName");
});

app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("port is running on port 3000.");
});
