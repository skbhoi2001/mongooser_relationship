const express = require("express");
const router = express.Router();

const Section = require("../models/section.model");

router.get("/", async (req, res) => {
  try {
    const section = await Section.find().lean().exec();
    return res.json(section);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


  router.get("/:id", async (req, res) => {
    try {
      const section = await Section.findById(req.params.id).lean().exec();

      res.status(200).json(section);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const section = await Section.create(req.body);
      res.status(201).json(section);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json(section);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      res.status(201).json(section);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


module.exports = router;