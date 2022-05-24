import { Router } from "express";
import { studentRepository } from "../om/student.js";

export const router = Router();

router.put('/', async (req, res) => {

    const student = await studentRepository.createEntity();

    student.student_num = req.body.student_num ?? null;
    student.name = req.body.name ?? null;
    student.college = req.body.college ?? null;
    student.major = req.body.major ?? null;
    student.student_type = req.body.student_type ?? null;
    student.graduated = req.body.graduated ?? null;
    student.entrance_date = req.body.entrance_date ?? null;

    const id = await studentRepository.save(student);

    if (id) {
        res.send(id);
    } else {
        res.status(400).send({
            message: "Error"
        });
    }
});


router.get('/:id', async (req, res) => {

    const student = await studentRepository.fetch(req.params.id)

    if (student) {
        res.send(student);
    } else {
        res.status(400).send({
            message: "Error"
        });
    }

})