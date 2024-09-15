import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyC-zZ-5z6PxOH1IzrFngJLvIKNB-m1lqgw",
   authDomain: "sound-core.firebaseapp.com",
   projectId: "sound-core",
   storageBucket: "sound-core.appspot.com",
   messagingSenderId: "326446923837",
   appId: "1:326446923837:web:2302536dfcf4055ccb6a54"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export {
   app,
   analytics,
}