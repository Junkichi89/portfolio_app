import firebase from 'firebase'

const config = {
  apiKey: process.env.FB_API_KEY,
  projectId: process.env.FB_PROJECT_ID,
  authDomain: process.env.FB_AUTH_DOMAIN,
  // databaseURL: process.env.FB_DATABASE_URL,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
