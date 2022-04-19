import  firebase  from 'firebase/compat';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDZQ_cGZ9jl7cIUGMTiPpvh7xYMt68eyBk",
    authDomain: "c70-library.firebaseapp.com",
    projectId: "c70-library",
    storageBucket: "c70-library.appspot.com",
    messagingSenderId: "968403167774",
    appId: "1:968403167774:web:eac794452070c49c37dc0f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();