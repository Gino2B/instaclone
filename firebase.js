// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7JQQ_6bVfU8U9CxWPUwiDcjZuGRLKuFU',
  authDomain: 'insta-2-8ac27.firebaseapp.com',
  projectId: 'insta-2-8ac27',
  storageBucket: 'insta-2-8ac27.appspot.com',
  messagingSenderId: '116941351907',
  appId: '1:116941351907:web:033ae6081c43c22748ced6',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
