import { Client } from "redis-om";

const url = `redis://${process.env.DB_HOST}:${process.env.DB_PORT}`
const client = await new Client().open(url);

export default client;