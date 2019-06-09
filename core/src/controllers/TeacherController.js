const Teacher = require("../models/Teacher");

module.exports = {
    async index (req, res) {
        try {
            const teachers = await Teacher.find()
            res.send({
                teachers: teachers
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher index"
            })
        }
    },
    async post (req, res) {
        try {
            const teacher = await Teacher.create(req.body)
            res.send({
                teacher: teacher
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher create"
            })
        }
    },
    async show (req, res) {
        try {
            const teacher = await Teacher.findById({_id: req.params.teacherID})
            res.send({
                teacher: teacher
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher show"
            })
        }
    },
    async put (req, res) {
        try {
            const teacher = await Teacher.update({_id: req.params.teacherID}, req.body)
            res.send({
                teacher: teacher
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher put"
            })
        }
    },
    async remove (req, res) {
        try {
            const teacher = await Teacher.remove({_id: req.params.teacherID})
            res.send("Success deleted !")
        } catch (err) {
            res.status(500).send({
                error: "This error is Teaher remove"
            })
        }
    }
}