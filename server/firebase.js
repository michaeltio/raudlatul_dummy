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
};
