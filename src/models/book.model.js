const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: { type: String, required: true },
  book_body: { type: String, required: true },
  isCheckedOut: { type: Boolean, default: false },
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sections",
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
  },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;