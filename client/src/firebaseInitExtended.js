import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';

const config = {
  projectId: 'choral-central',
  measurementId: 'G-S4ER1XKJ4V',
  messagingSenderId: '123517309769',
  storageBucket: 'choral-central.appspot.com',
  authDomain: 'choral-central.firebaseapp.com',
  apiKey: 'AIzaSyAX8Edyecx0ZcAMcy_fYIwpyDZ2rMULyhU',
  databaseURL: 'https://choral-central.firebaseio.com',
  appId: '1:123517309769:web:51d77107afaeb0707f8098',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const messaging = firebase.messaging();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
