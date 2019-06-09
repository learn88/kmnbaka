var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
    name: String,
    slogram: String,
    description: String,
    logo: String,
    profile: String,
    school_level_id: String
});

module.exports = mongoose.model("School", schoolSchema);