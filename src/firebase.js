import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAlAR9lnjSdNR1tuMmEzkejfFY32XmOtVQ",
    authDomain: "contactbook-21395.firebaseapp.com",
    databaseURL: "https://contactbook-21395-default-rtdb.firebaseio.com",
    projectId: "contactbook-21395",
    storageBucket: "contactbook-21395.appspot.com",
    messagingSenderId: "426739647266",
    appId: "1:426739647266:web:59e38a451537dcd31b9b7b"
};


const app = firebase.initializeApp(firebaseConfig)
export default app