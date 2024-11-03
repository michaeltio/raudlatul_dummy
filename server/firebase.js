const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  collection,
  query,
} = require("firebase/firestore");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} = require("firebase/auth");

let app;
let firestoreDB;
let auth;

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDB = getFirestore();
    auth = getAuth();
    return app;
  } catch (error) {
    console.log("Firebase Error: ", error);
  }
};

const registerUser = async (
  email,
  password,
  username,
  address,
  phoneNumber
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    const userData = {
      username: username,
      address: address,
      phoneNumber: phoneNumber,
    };

    await setDoc(doc(firestoreDB, "users", uid), userData);

    return userCredential;
  } catch (error) {
    console.log("Error in registering user: ", error);
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error in logging in user:", error.message);
    throw new Error("Failed to log in. Please check your email and password.");
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.log("Error signing out: ", error);
  }
};

const addKaligraphyItem = async (data) => {
  try {
    const document = await addDoc(
      collection(firestoreDB, "kaligraphyItem"),
      data
    );
    return document.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const addReviewToKaligraphyItem = async (itemId, reviewData) => {
  try {
    const reviewsRef = collection(
      firestoreDB,
      "kaligraphyItem",
      itemId,
      "review"
    );
    const document = await addDoc(reviewsRef, reviewData);
    return document.id;
  } catch (error) {
    console.error("Error adding review: ", error);
  }
};

const postData = async (data, collectionName) => {
  try {
    const document = await addDoc(
      collection(firestoreDB, collectionName),
      data
    );
    return document;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const getAllData = async (collectionName) => {
  try {
    const collectionRef = collection(firestoreDB, collectionName);
    const data = [];

    let q;

    q = query(collectionRef);

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const getData = async (collectionName, id) => {
  try {
    const document = await getDoc(doc(firestoreDB, collectionName, id));
    return document.data();
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const updateData = async (collectionName, id, data) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataUpdated = await setDoc(document, data);
    return dataUpdated;
  } catch (error) {
    console.log("Error in uploading data: ", error);
  }
};

const deleteData = async (collectionName, id) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataDeleted = await deleteDoc(document);
    return dataDeleted;
  } catch (error) {
    console.log("Error in deleting data: ", error);
  }
};

module.exports = {
  initializeFirebaseApp,
  postData,
  getAllData,
  getData,
  updateData,
  deleteData,
  registerUser,
  loginUser,
  addKaligraphyItem,
  addReviewToKaligraphyItem,
};
