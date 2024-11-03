const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
  initializeFirebaseApp,
  registerUser,
  loginUser,
  addKaligraphyItem,
  addReviewToKaligraphyItem,
  postData,
  getAllData,
  getData,
  updateData,
  deleteData,
} = require("./firebase");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
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

app.post("/logout", authenticateToken, (req, res) => {
  // Invalidate the token on the client side
  return res.json({ message: "Logout successful!" });
});

app.get("/protected", authenticateToken, (req, res) => {
  return res.json({ message: "This is a protected route" });
});

app.get("/user", authenticateToken, (req, res) => {
  console.log(req.user);
  return res.json({ user: req.user });
});

app.post("/create/kaligraphyItem", async (req, res) => {
  const {
    artist_name,
    category,
    created_date,
    description,
    image,
    is_available,
    item_id,
    item_name,
    price,
    quantity,
    rating,
  } = req.body;

  const itemData = {
    artist_name,
    category,
    created_date,
    description,
    image,
    is_available,
    item_id,
    item_name,
    price,
    quantity,
    rating,
  };

  try {
    const itemId = await addKaligraphyItem(itemData);
    return res.json({
      message: "Kaligraphy item created successfully!",
      itemId,
    });
  } catch (error) {
    console.error("Error creating kaligraphy item: ", error);
    return res
      .status(500)
      .json({ message: "Failed to create kaligraphy item." });
  }
});

app.post("/create/kaligraphyItem/:itemId/review", async (req, res) => {
  const itemId = req.params.itemId;
  const { customer_name, item_name, rating, review } = req.body;

  const reviewData = {
    customer_name,
    item_name,
    rating,
    review,
  };

  try {
    const reviewId = await addReviewToKaligraphyItem(itemId, reviewData);
    return res.json({ message: "Review added successfully!", reviewId });
  } catch (error) {
    console.error("Error adding review: ", error);
    return res.status(500).json({ message: "Failed to add review." });
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

app.get("/read/cart/:userId", async (req, res) => {
  const userId = req.params.userId;
  // Fetch cart data using userId
  const cartData = await getCartData(userId); // Assuming getCartData is a function to fetch cart data
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
