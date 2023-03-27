import { getApp, getApps, initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore" 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW_Bpv5-9wjQyRBk1wwNs3VLZwTvl_g_Y",
  authDomain: "chatgpt-messenger-cce36.firebaseapp.com",
  projectId: "chatgpt-messenger-cce36",
  storageBucket: "chatgpt-messenger-cce36.appspot.com",
  messagingSenderId: "295335104403",
  appId: "1:295335104403:web:797f23f52d51864be9e266"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }