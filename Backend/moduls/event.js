const mongoose = require("mongoose");

mongoose.connect( "mongodb://127.0.0.1:27017/projectcustomer", { useMongoClient : true });

const Schema = mongoose.Schema;

const eventSchema = new Schema({

    userId: String,
    name : String,
    address : String,
    start : String,
    ends : String,
    details: String,
    profile: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;