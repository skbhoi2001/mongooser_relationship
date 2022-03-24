const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://soumyak:Soumyak_2001@cluster0.op2ri.mongodb.net/library?retryWrites=true&w=majority"
  );
};

module.exports = connect;