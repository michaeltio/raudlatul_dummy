const admin = require("firebase-admin");

const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");

const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyDHelwXXrAMhytact6B3zCS7LyEDcJS-Wo",
  authDomain: "raudlatulirfan-c7999.firebaseapp.com",
  projectId: "raudlatulirfan-c7999",
  storageBucket: "raudlatulirfan-c7999.appspot.com",
  messagingSenderId: "546842381619",
  appId: "1:546842381619:web:4afc62d57234b3996a8246",
  measurementId: "G-JRGN04FFXP",
};

const app = admin.initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTest(db) {
  const testCol = collection(db, "Test");
  const testSnapshot = await getDocs(testCol);
  const testList = testSnapshot.docs.map((doc) => doc.data());
  return cityList;
}

module.exports = getTest(db);
