const express = require("express");
const app = express();
const cors = require("cors");
const {
  initializeFirebaseApp,
  uploadProccessedData,
  getCollectionData,
} = require("./firebase");

const PORT = 3001;
initializeFirebaseApp();

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
  const data = await getCollectionData("KaligraphyItem");
  return res.json(data);
});

app.post("/create", async (req, res) => {
  await uploadProccessedData(req.body, "data");
  return res.json({ message: "Data uploaded successfully!" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
