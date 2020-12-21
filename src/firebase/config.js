import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const MESSAGING_SENDERID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID



var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERID,
  appId: APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectStorage, projectFirestore, timestamp} 