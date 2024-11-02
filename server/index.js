const express = require("express");
const app = express();
const cors = require("cors");
const {
  initializeFirebaseApp,
  postData,
  getAllData,
  getData,
  updateData,
  deleteData,
  registerUser,
  loginUser,
} = require("./firebase");

const PORT = 3001;
initializeFirebaseApp();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password, username, address, phoneNumber } = req.body;
  try {
    const user = await registerUser(email, password, username, address, phoneNumber);
    return res.json({ message: "User registered successfully!", user });
  } catch (error) {
    return res.status(400).json({ message: error.message }); 
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await loginUser(email, password);
  if (user) {
    return res.json({ message: "User logged in successfully!", user });
  } else {
    return res.status(400).json({ message: "Login failed." });
  }
});

app.post("/create/:category", async (req, res) => {
  const category = req.params.category;
  await postData(req.body, category);
  return res.json({ message: "Data uploaded successfully!" });
});

app.get("/read/:category", async (req, res) => {
  const category = req.params.category;
  const data = await getAllData(category);

  return res.json(data);
});

app.get("/read/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  const data = await getData(category, id);

  return res.json(data);
});

app.post("/update/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  await updateData(category, id, req.body);
  return res.json({ message: "Data edited successfully!" });
});

app.post("/delete/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  await deleteData(category, id);
  return res.json({ message: "Data deleted successfully!" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
