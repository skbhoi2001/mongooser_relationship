const express = require("express");
const router = express.Router();

const Author = require("../models/author.model");
const Book = require("../models/book.model");

router.get("/", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();
    return res.json(authors);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id/books", async (req, res) => {
  try {
    console.log(req.params.id);
    const book = await Book.find({ author_id: req.params.id }).populate(
      "author_id"
    );
    return res.send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).lean().exec();

    res.status(200).json(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
    res.status(201).json(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;