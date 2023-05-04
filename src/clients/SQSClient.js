import { SQSClient } from "@aws-sdk/client-sqs";
import config from "../config.js";

const client = new SQSClient({
  region: "eu-central-1",
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

export default client;
