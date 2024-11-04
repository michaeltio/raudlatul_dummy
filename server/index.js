// Import funtions
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
  initializeFirebaseApp,
  registerUser,
  loginUser,
  postData,
  getAllData,
  getData,
  updateData,
  deleteData,
  signOutUser,
} = require("./firebase");
require("dotenv").config();

// Express setup
const app = express();
const PORT = 3001;

initializeFirebaseApp();

app.use(cors());
app.use(express.json());

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid Token");
    }
    req.user = decoded;
    next();
  });
};

// Authentication routes
app.post("/register", async (req, res) => {
  const { email, password, username, address, phoneNumber } = req.body;
  try {
    const user = await registerUser(
      email,
      password,
      username,
      address,
      phoneNumber
    );
    return res.json({ message: "User registered successfully!", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    const token = jwt.sign(
      { uid: user.user.uid, email: user.user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.json({ message: "Login successful!", token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.post("/logout", authenticateToken, async (req, res) => {
  try {
    await signOutUser();
    return res.json({ message: "Logout successful!" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to logout." });
  }
});

app.get("/protected", authenticateToken, (req, res) => {
  return res.json({ message: "This is a protected route" });
});

app.get("/user", authenticateToken, (req, res) => {
  console.log(req.user);
  return res.json({ user: req.user });
});

// CRUD routes
app.post("/create/:category", async (req, res) => {
  const category = req.params.category;
  await postData(req.body, category);
  return res.json({ message: "Data uploaded successfully!" });
});

app.get("/read/review/:kaligraphyItemId", async (req, res) => {
  const kaligraphyItemId = req.params.kaligraphyItemId;
  const reviewData = await getAllData("kaligraphyItem/" + kaligraphyItemId + "/review");
  return res.json(reviewData);
});

app.get("/read/cart/:userId", async (req, res) => {
  const userId = req.params.userId;
  const cartData = await getAllData("users/" + userId + "/cart");
  return res.json(cartData);
});

app.get("/read/:category", async (req, res) => {
  const category = req.params.category;
  console.log("apa aja");
  const data = await getAllData(category);

  return res.json(data);
});

app.get("/read/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  const data = await getData(category, id);

  return res.json(data);
});

app.get("/read/cart/:userId", async (req, res) => {
  const userId = req.params.userId;
  const cartData = await getCartData(userId);
  return res.json(cartData);
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
