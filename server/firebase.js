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
  where,
} = require("firebase/firestore");

let app;
let firestoreDB;

const firebaseConfig = {
  apiKey: "AIzaSyDHelwXXrAMhytact6B3zCS7LyEDcJS-Wo",
  authDomain: "raudlatulirfan-c7999.firebaseapp.com",
  projectId: "raudlatulirfan-c7999",
  storageBucket: "raudlatulirfan-c7999.appspot.com",
  messagingSenderId: "546842381619",
  appId: "1:546842381619:web:4afc62d57234b3996a8246",
  measurementId: "G-JRGN04FFXP",
};

const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDB = getFirestore();
    return app;
  } catch (error) {
    console.log("Firebase Error: ", error);
  }
};

const postData = async (data, collectionName) => {
  try {
    const document = await addDoc(collection(firestoreDB, collectionName), data);
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
    const document = await getDoc(doc(firestoreDB, collectionName, id))
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
};
