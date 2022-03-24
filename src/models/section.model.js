const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  section_name: { type: String, required: true },
});

const Section = mongoose.model("sections", sectionSchema);

module.exports = Section;