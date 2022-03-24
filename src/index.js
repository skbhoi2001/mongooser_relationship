const express = require("express");
const connect = require("./config/db");
const app = express();
const PORT = 8000;
const authController = require("./controllers/author.controller");
const sectionController = require("./controllers/section.controller");
const bookController = require("./controllers/book.controller");
app.use(express.json());




app.use("/authors", authController);
app.use("/sections", sectionController);
app.use("/books", bookController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("App is Listening on port " + PORT);
  } catch (err) {
    console.log(err.message);
  }
});