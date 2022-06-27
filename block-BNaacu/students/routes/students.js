const express = require("express");
let router = express.Router();
router.get("/new", (req, res) => {
  res.render("form");
});
router.post("/", (req, res) => {
  res.send(req.body);
});

router.get("/", (req, res) => {
  res.render("ls", { list: ["sunny", "abhishek", "aditya", "ravi"] });
});

router.get("/:id", (req, res) => {
  res.render("studentDetail", {
    student: { name: "vishal goswami", email: "vishalgoswami2250@gmail.com" },
  });
});

module.exports = router;