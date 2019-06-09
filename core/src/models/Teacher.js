var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
    name: String,
    school_id: String,
    nrc: {
      type: String,
      unique: true,
      required: true
    },
    image: String,
    position: String
});

module.exports = mongoose.model("Teacher", teacherSchema);