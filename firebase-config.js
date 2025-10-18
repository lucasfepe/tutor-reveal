// firebase-config.js
// IMPORTANT: Replace these with your actual Firebase config values
// Get them from Firebase Console > Project Settings > Your apps > Web app
const firebaseConfig = {
    apiKey: "AIzaSyCFpWYIdJzG6HLjrcFchi0HYLTVE7a0S5s",
    authDomain: "tutoring-app-528a2.firebaseapp.com",
    projectId: "tutoring-app-528a2",
    storageBucket: "tutoring-app-528a2.firebasestorage.app",
    messagingSenderId: "831181861625",
    appId: "1:831181861625:web:d242e08cb5b40df1f6a828"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();