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

app.get("/api/item", async (req, res) => {
  const data = await getCollectionData("KaligraphyItem");
  return res.json(data);
});

app.get("/api/courier", async (req, res) => {
  const data = await getCollectionData("Courier");
  return res.json(data);
});

app.get("/api/customer", async (req, res) => {
  const data = await getCollectionData("Customer");
  return res.json(data);
});

app.post("/create/add-item", async (req, res) => {
  await uploadProccessedData(req.body, "KaligraphyItem");
  return res.json({ message: "Data uploaded successfully!" });
});

app.post("/create/add-courier", async (req, res) => {
  await uploadProccessedData(req.body, "Courier");
  return res.json({ message: "Data uploaded successfully!" });
});

app.post("/create/add-customer", async (req, res) => {
  await uploadProccessedData(req.body, "Customer");
  return res.json({ message: "Data uploaded successfully!" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
