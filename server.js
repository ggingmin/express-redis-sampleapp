import 'dotenv/config'

import express from 'express';
import { router as studentRouter } from "./routers/student.router.js";

const app = new express();
app.use(express.json());
app.use('/students', studentRouter);
app.get('/', (req, res) => {
    res.send({
        message: "Hello, Cloudtype!",
    })
});

app.listen(8080);