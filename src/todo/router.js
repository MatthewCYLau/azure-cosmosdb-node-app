const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = [{}];
  return res.status(200).send(todos);
});

module.exports = router;
