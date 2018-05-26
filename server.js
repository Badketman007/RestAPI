const express = require("express");
const app = express();

const user = [
  {
    Articles: "Node Js ServerSide",
    Author: "Mr.xxx"
  },

  {
    Articles: "Express Js ServerSide",
    Author: "Mr.yyyy"
  },

  {
    Articles: "React Coding",
    Author: "Mr.CCC"
  },

  {
    Articles: "Vuejs Documents",
    Author: "Mr.YYY"
  }
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("view", { data: user });
});

app.listen(3000, () => {
  console.log("Server started on port 3000!!");
});
