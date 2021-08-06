import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length) {
  firebase.initializeApp({
    ApiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    AuthDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    ProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase