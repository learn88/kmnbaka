var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userRoleSchema = new Schema({
  name: String,
  description: String,
  level: String
});

module.exports = mongoose.model("UserRole", userRoleSchema);
