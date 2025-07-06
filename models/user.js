const mongoose = require("mongoose"); // <-- CommonJS
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const user = mongoose.model("user", userSchema);
module.exports = user ;
