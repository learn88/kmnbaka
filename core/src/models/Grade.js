var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gradeSchema = new Schema({
    title: String,
    description: String,
    subject_id: String
});

module.exports = mongoose.model("Grade", gradeSchema);