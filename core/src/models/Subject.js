var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("Subject", subjectSchema);