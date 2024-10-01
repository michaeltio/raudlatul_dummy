// Imports

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} = require("firebase/firestore");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} = require("firebase/auth");

// Firebase Config

let app;
let firestoreDB;
let auth;

const firebaseConfig = {
  apiKey: "AIzaSyDHelwXXrAMhytact6B3zCS7LyEDcJS-Wo",
  authDomain: "raudlatulirfan-c7999.firebaseapp.com",
  projectId: "raudlatulirfan-c7999",
  storageBucket: "raudlatulirfan-c7999.appspot.com",
  messagingSenderId: "546842381619",
  appId: "1:546842381619:web:4afc62d57234b3996a8246",
  measurementId: "G-JRGN04FFXP",
};

// Firebase Initialization

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

// Firebase Auth Functions

const createUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log("Error in creating user: ", error);
  }
};

const signInUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log("Error in signing in: ", error);
  }
};

const signOutUser = async () => {
  try {
    const user = await signOut(auth);
    return user;
  } catch (error) {
    console.log("Error in signing out: ", error);
  }
};

const authMiddleware = async (req, res, next) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).send("Unauthorized");
      }
    });
  } catch (error) {
    console.log("Error in authMiddleware: ", error);
  }
};

// Firebase Firestore Functions

const uploadProccessedData = async (data, collectionName) => {
  try {
    const document = doc(firestoreDB, collectionName, "unique-id");
    let dataUpdated = await setDoc(document, data);
    return dataUpdated;
  } catch (error) {
    console.log("Error in uploading data: ", error);
  }
};

const getCollectionData = async (collectionName) => {
  try {
    const collectionRef = collection(firestoreDB, collectionName);
    const data = [];
    const q = query(collectionRef);

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const getFirebaseApp = () => app;

module.exports = {
  initializeFirebaseApp,
  getFirebaseApp,
  uploadProccessedData,
  getCollectionData,
  createUser,
  signInUser,
  signOutUser,
};
