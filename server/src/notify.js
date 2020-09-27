import { messaging } from './firebaseInit';

export const sendNotificationToClient = (tokens, data) => {
  // Send a message to the device corresponding to the provided
  // registration token.
  messaging
    .sendMulticast({ tokens, data })
    .then(response => {
      // Response is an object of the form { responses: [] }
      const successes = response.responses.filter(r => r.success === true)
        .length;
      const failures = response.responses.filter(r => r.success === false)
        .length;
      console.log(
        'Notifications sent:',
        `${successes} successful, ${failures} failed`
      );
    })
    .catch(error => {
      console.log('Error sending message:', error);
    });
};
