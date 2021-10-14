import * as firebase from 'firebase';

import "firebase/firestore";



// Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyBrEqI6eebrQdYb7nz1xH5onyPmuYb0CWc",
    authDomain: "biometric-adb.firebaseapp.com",
    projectId: "biometric-adb",
    storageBucket: "biometric-adb.appspot.com",
    messagingSenderId: "273893549802",
    appId: "1:273893549802:web:f05b5fc453ee52bb375993",
    measurementId: "G-ZT7GST6XVX"
};

let app;

if(firebase.apps.length === 0){
   app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

export default firebase;
export const database = firebase.firestore();