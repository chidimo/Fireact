
import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings'

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://push-notifications-article.firebaseio.com',
});

export const messaging = admin.messaging();
