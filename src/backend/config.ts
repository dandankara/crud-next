import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length) {
  firebase.initializeApp({
    API_KEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase