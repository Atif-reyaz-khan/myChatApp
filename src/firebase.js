// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyByAGiB3sbHMGRzaqiEuyZ3S2VhDaoKM90",
  authDomain: "mywhatsapp-4cd2a.firebaseapp.com",
  databaseURL: "https://mywhatsapp-4cd2a-default-rtdb.firebaseio.com",
  projectId: "mywhatsapp-4cd2a",
  storageBucket: "mywhatsapp-4cd2a.appspot.com",
  messagingSenderId: "62345317535",
  appId: "1:62345317535:web:f14e0605a23cf732ea66aa",
  measurementId: "G-QRCWZVQB2Z"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

const provider=new firebase.auth
.GoogleAuthProvider();
export {auth,provider};
export default db;

