import { Consumer } from "sqs-consumer";
import client from "./clients/SQSClient.js";
import config from "./config.js";
import { insert } from "./repositories/movie-repository.js";

export const consumer = Consumer.create({
  queueUrl: config.AWS_SQS_QUEUE_URL,
  handleMessage: async (message) => {
    const body = JSON.parse(message.Body);
    console.log(body);
    insert({ movie: body });
  },
  sqs: client,
});

consumer.on("error", (err) => {
  console.error(`Error: ${err.message}`);
});

consumer.on("processing_error", (err) => {
  console.error(`Processing error: ${err.message}`);
});

consumer.on("timeout_error", (err) => {
  console.error(`Timeout error: ${err.message}`);
});
