import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_CONN_STRING: process.env.MONGO_CONN_STRING,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SQS_QUEUE_URL: process.env.AWS_SQS_QUEUE_URL,
};
