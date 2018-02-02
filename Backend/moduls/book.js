const mongoose = require("mongoose");

mongoose.connect( "mongodb://127.0.0.1:27017/projectcustomer", { useMongoClient : true });

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    restauranId: String,
    checkIn: String,
    name: String,
    people: Number
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;