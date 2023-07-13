const searching = require("./src/controllers/Search/index.ts");

const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  const { body } = req;
  const result = searching(body.search);
  res.send(result);
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
