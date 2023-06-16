import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDRKdluX2EoWCQ25nan760dYayP9aMAn_s',
//   authDomain: 'foodapp-b4f5f.firebaseapp.com',
//   databaseURL:
//     'https://foodapp-b4f5f-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'foodapp-b4f5f',
//   storageBucket: 'foodapp-b4f5f.appspot.com',
//   messagingSenderId: '1095396547734',
//   appId: '1:1095396547734:web:588df6a61ed5a71f7076b7',
// }

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };



