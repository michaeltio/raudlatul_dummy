const express = require("express");
const app = express();
const cors = require("cors");
const {
  initializeFirebaseApp,
  uploadProccessedData,
  getCollectionData,
  createUser,
  signInUser,
  signOutUser,
} = require("./firebase");

const PORT = 3001;
initializeFirebaseApp();

app.use(cors());
app.use(express.json());

// Authentication
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await createUser(email, password);
  return res.json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await signInUser(email, password);
  return res.json(user);
});

app.post("/logout", async (req, res) => {
  const user = await signOutUser();
  return res.json(user);
});

// Data

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
