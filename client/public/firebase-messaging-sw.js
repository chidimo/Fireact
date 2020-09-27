importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

const config = {
  apiKey: 'AIzaSyD6n58WMRzrcXxMnDGvzttxk4lqNu0MZbI',
  authDomain: 'push-notifications-article.firebaseapp.com',
  databaseURL: 'https://push-notifications-article.firebaseio.com',
  projectId: 'push-notifications-article',
  storageBucket: 'push-notifications-article.appspot.com',
  messagingSenderId: '607164875245',
  appId: '1:607164875245:web:ac22e68ecfd336b8ad67e4',

};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});
