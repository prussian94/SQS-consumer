import { consumer } from "./consumer.js";
import { connectDB } from "./database-connection.js";

function run() {
  consumer.start();
  connectDB();
}

run();
