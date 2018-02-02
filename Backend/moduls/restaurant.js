const mongoose = require("mongoose");

mongoose.connect( "mongodb://127.0.0.1:27017/projeccustomer", { useMongoClient : true });

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({

    userId: String,
    title : String,
    address : String,
    cuisines:String,
    opens : String,
    cost : String,
    phone : String,
    email : String,
    details : String,
    profile: String,

    checkIn: String,
    name: String,
    people: Number
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;