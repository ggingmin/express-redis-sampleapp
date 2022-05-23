import { Entity, Schema, Client, Repository } from "redis-om";
import dotenv from 'dotenv';
dotenv.config();

class Student extends Entity {}
const schema = new Schema(Student, {
    student_num: { type: 'number' },
    name: { type: 'string' },
    college: { type: 'string' },
    major: { type: 'string' },
    student_type: { type: 'string'},
    graduated: { type: 'boolean' },
    entrance_date: { type: 'date' }
});

const client = new Client();
await client
    .open(`redis://${process.env.DB_HOST}:${process.env.DB_PORT}`)
    .then(() => {
        console.log("Redis connected.");
    })
    .catch(err => {
        console.log("Redis connection has not been generated.");
        process.exit();
    });

export const studentRepository = client.fetchRepository(schema);
// await studentRepository.createIndex();
