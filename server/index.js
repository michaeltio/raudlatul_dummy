const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

const db = require("./config");
console.log(db);

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/create", async (req, res) => {
  const data = req.body;
  console.log("Data of Test ", data);
  res.send({ msg: "User Added" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
