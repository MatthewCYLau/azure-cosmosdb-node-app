const express = require("express");
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/todos", require("./todo/router"));

app.get("/ping", (req, res) => {
  return res.status(200).send("pong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
