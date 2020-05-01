import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyD6n58WMRzrcXxMnDGvzttxk4lqNu0MZbI",
  authDomain: "push-notifications-article.firebaseapp.com",
  databaseURL: "https://push-notifications-article.firebaseio.com",
  projectId: "push-notifications-article",
  storageBucket: "push-notifications-article.appspot.com",
  messagingSenderId: "607164875245",
  appId: "1:607164875245:web:ac22e68ecfd336b8ad67e4"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
