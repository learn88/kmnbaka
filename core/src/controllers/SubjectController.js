const Subject = require("../models/Subject");

module.exports = {
    async index (erq, res) {
        try {
            const subjects = await Subject.find()
            res.send({
                subjects: subjects
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Subject index"
            })
        }
    },
    async post (req, res) {
        try {
            const subject = await Subject.create(req.body)
            res.send({
                subject: subject
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Subject Create"
            })
        }
    },
    async show (req, res) {
        try {
            const subject = await Subject.findById({_id: req.params.subjectID})
            res.send({
                subject: subject
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Subject show"
            })
        }
    },
    async put (req, res) {
        try {
            const subject = await Subject.update({_id: req.params.subjectID}, req.body)
            res.send({
                subject: subject
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Subject put"
            })
        }
    },
    async remove (req, res) {
        try {
            const subject = await Subject.remove({_id: req.params.subjectID})
            res.send({
                subject: subject
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Subject remove"
            })
        }
    }
}