import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';


dotenv.config();

mongoose.connect(process.env.DB_CONN_STRING as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .catch(e => {
    console.error('Connection error', e.message)
  });

const db = mongoose.connection;

export default db;