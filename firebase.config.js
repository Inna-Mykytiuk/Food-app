import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage;';

const firebaseConfig = {
  apiKey: 'AIzaSyDRKdluX2EoWCQ25nan760dYayP9aMAn_s',
  authDomain: 'foodapp-b4f5f.firebaseapp.com',
  databaseURL:
    'https://foodapp-b4f5f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'foodapp-b4f5f',
  storageBucket: 'foodapp-b4f5f.appspot.com',
  messagingSenderId: '1095396547734',
  appId: '1:1095396547734:web:588df6a61ed5a71f7076b7',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFireStore(app);
const storage = getStorage(app);

export { app, firestore, storage };
