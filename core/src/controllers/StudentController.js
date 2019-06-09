const Student = require("../models/Student");

module.exports = {
    async index (erq, res) {
        try {
            const students = await Student.find()
            res.send({
                students: students
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student index"
            })
        }
    },
    async post (req, res) {
        try {
            const student = await Student.create(req.body)
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student Create"
            })
        }
    },
    async show (req, res) {
        try {
            const student = await Student.findById({_id: req.params.studentID})
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student show"
            })
        }
    },
    async put (req, res) {
        try {
            const student = await Student.update({_id: req.params.studentID}, req.body)
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student put"
            })
        }
    },
    async remove (req, res) {
        try {
            const student = await Student.remove({_id: req.params.studentID})
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student remove"
            })
        }
    }
}