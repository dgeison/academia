const fs = require("fs");
const data = require("./data.json");

// CREATE
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Please, fill all fields!");
  }

  req.body.birth = Date.parse(req.body.birth);
  req.body.created_at = Date.now();
  req.body.id = Number(data.instructors.length + 1);

  const {
    avatar_url,
    birth,
    created_at,
    id,
    name,
    gender,
    services,
  } = req.body;

  data.instructors.push(
    avatar_url,
    birth,
    created_at,
    id,
    name,
    gender,
    services
  );

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file errors!");

    return res.redirect("/instructors");
  });
};

// UPDATE
