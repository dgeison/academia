const express = require("express");

const routes = express.Router();

routes.get("/", function (req, res) {
  return res.redirect("/instructors");
});

routes.get("/instructors", function (req, res) {
  return res.render("instructors/index");
});

routes.get("/instructors/create", function (req, res) {
  return res.render("instructors/create");
});

routes.post("/instructors", function (req, res) {
  // if (req.body.name != "") {
  //   return res.send("Prencha o nome do instrutor");
  // }

  //["avatar_URL","name","birth","gender","services"]
  //{"avatar_URL":"http://google.com","name":"Dgeison Peixoto","birth":"2021-02-13","gender":"M","services":""}
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Please, fill all fields!");
  }

  return res.send(req.body);
});

routes.get("/members", function (req, res) {
  return res.send("members");
});

module.exports = routes;
