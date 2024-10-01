// Imports

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
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

const randomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 20;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
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
    const document = doc(firestoreDB, collectionName, randomId());
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
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const getCollectionDataWhere = async (collectionName, field, value) => {
  try {
    const collectionRef = collection(firestoreDB, collectionName);
    const data = [];
    const q = query(collectionRef, where(field, "==", value));

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const editCollectionData = async (collectionName, id, data) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataUpdated = await setDoc(document, data);
    return dataUpdated;
  } catch (error) {
    console.log("Error in uploading data: ", error);
  }
};

const deleteCollectionData = async (collectionName, id) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataDeleted = await deleteDoc(document);
    return dataDeleted;
  } catch (error) {
    console.log("Error in deleting data: ", error);
  }
};

const getFirebaseApp = () => app;

module.exports = {
  initializeFirebaseApp,
  getFirebaseApp,
  uploadProccessedData,
  getCollectionData,
  getCollectionDataWhere,
  editCollectionData,
  deleteCollectionData,
  createUser,
  signInUser,
  signOutUser,
};
