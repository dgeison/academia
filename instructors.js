const fs = require("fs");
const data = require("./data.json");


// CREATE
exports.post = function (req, res) {
  // if (req.body.name != "") {
  //   return res.send("Prencha o nome do instrutor");
  // }

  //["avatar_URL","name","birth","gender","services"]
  //{"avatar_URL":"http://google.com","name":"Dgeison Peixoto","birth":"2021-02-13","gender":"M","services":""}
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Please, fill all fields!");
  }

  req.body.created_at = Date.now()

  // []
  data.instructors.push(req.body); // [{...}, {...}]

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file errors!");

    return res.redirect("/instructors");
  });

  //   return res.send(req.body);
};

// UPDATE
