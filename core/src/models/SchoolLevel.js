var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schoolLevelSchema = new Schema({
    name: String,
    grade_id: String
})

module.exports = mongoose.model("SchoolLevel", schoolLevelSchema);