// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsag5T8bbyH-jT0qAN6b_K2FfqoV3bzHI",
  authDomain: "carbontracker-15ee0.firebaseapp.com",
  projectId: "carbontracker-15ee0",
  storageBucket: "carbontracker-15ee0.appspot.com",
  messagingSenderId: "230432331579",
  appId: "1:230432331579:web:7ef6830a8cb45ea1da091e"
};

// Initialize Firebase
let app; 
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };