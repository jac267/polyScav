// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdV5XCghQmTA9X_8FPDZc3Yp2B46KW_T0",
  authDomain: "polysacv.firebaseapp.com",
  projectId: "polysacv",
  storageBucket: "polysacv.appspot.com",
  messagingSenderId: "891558746289",
  appId: "1:891558746289:web:cebedd40ff6d8711bfaa90",
  measurementId: "G-6DK4YMWPZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function writereadChallengesData(challengeId, description, points, completed) {
    const db = getDatabase(app);
    set(ref(db, 'challenges/' + challengeId), {
      description: description,
      points: points,
      completed: completed,
    });

}

function readChallengesData(){
    const db = getDatabase(app);
    const challengesRef = ref(db, 'challenges/');
    onValue(challengesRef, (snapshot) => {
        const data = snapshot.val();
        localStorage["challengesData"] = JSON.stringify(data);
    });
}

readChallengesData();