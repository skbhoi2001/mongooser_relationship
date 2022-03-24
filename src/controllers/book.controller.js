const express = require("express");
const router = express.Router();

const Book = require("../models/book.model");

router.get("/", async (req, res) => {
  try {
    let criteria = {};
    const { isCheckedOut } = req.query;
    if (isCheckedOut) {
      criteria.isCheckedOut = isCheckedOut;
    }
    const books = await Book.find(criteria)
      .populate("section_id")
      .populate("author_id")
      .lean()
      .exec();
    return res.json(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


  router.get("/:id/section", async (req, res) => {
    try {
      const books = await Book.find({ section_id: req.params.findById });
      return res.json(books);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("/:id/sections", async (req, res) => {
    try {
      console.log(req.params.id);
      const book = await Book.find({ section_id: req.params.id }).populate(
        "section_id"
      );
      return res.send(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).lean().exec();

      res.status(200).json(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
      res.status(201).json(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


module.exports = router;