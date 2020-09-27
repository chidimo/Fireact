import dotenv from 'dotenv';

dotenv.config();
export const connectionString = process.env.CONNECTION_STRING;
export const googleApplicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
