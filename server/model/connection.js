const mongoose = require("mongoose");

module.exports.DbConnection = () => {
  // MongoDB Connection
  const DB_URI =
    "mongodb+srv://loginsignup:2024M@cluster0.ddukobo.mongodb.net/Hacathon?retryWrites=true&w=majority";
  // "mongodb+srv://loginsignup:2024M@cluster0.ddukobo.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));
};

// hacathon
