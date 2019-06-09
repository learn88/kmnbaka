var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: String,
    school_id: String,
    dob: String,
    father_name: String,
    register_no: String,
    start_grate: String
});

module.exports = mongoose.model("Student", studentSchema);