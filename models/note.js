import mongoose from "mongoose";
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: date,
    default: Date.now,
  },
});

module.exports = mongoose.model("note", noteSchema);
