import amqp from 'amqplib';
import { config } from 'dotenv';
config();

const QUEUE_NAME = process.env.QUEUE_NAME;

const HOST_NAME = process.env.HOST_NAME;
const RABBIT_PORT = process.env.RABBIT_PORT;
const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const URI = `amqp://${USERNAME}:${PASSWORD}@${HOST_NAME}:${RABBIT_PORT}`;

const queue = QUEUE_NAME;

const sendToQueue = async (data) => {
    try {
        const connect = await amqp.connect(URI);
        const channel = await connect.createChannel();

        await channel.assertQueue(queue, { durable: true });

        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: false });

    } catch (error) {
        console.log("Error ->", error)
    }
}

export default sendToQueue