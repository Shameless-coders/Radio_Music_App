import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAeJtAB31oda_YtxQMTF7GbnFugo6FsMrE",
  authDomain: "music-radio-app.firebaseapp.com",
  projectId: "music-radio-app",
  storageBucket: "music-radio-app.appspot.com",
  messagingSenderId: "940982582872",
  appId: "1:940982582872:web:b01dcdc3561f73af1cd42d",
  measurementId: "G-B11VKYKYFW"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase}
