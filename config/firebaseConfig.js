const {initializeApp} = require("firebase/app")

const firebaseConfig = {
    apiKey: "AIzaSyByd1cEUdI8bRl8X1C-wAhyX8wQAaVURTY",
    authDomain: "tem-visto.firebaseapp.com",
    projectId: "tem-visto",
    storageBucket: "tem-visto.appspot.com",
    messagingSenderId: "657056941877",
    appId: "1:657056941877:web:f5fbb6f0ffefe523116e7c"
  };

const app = initializeApp(firebaseConfig);

module.exports = app