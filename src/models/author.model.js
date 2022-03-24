const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const Author = mongoose.model("authors", authorSchema);
module.exports = Author;