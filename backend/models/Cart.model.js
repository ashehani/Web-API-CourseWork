const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    Depdestination: { type: String, required: true },
    Arridestination: { type: String, required: true },
    Depdate : { type: String, required: true },
    Arrdate: { type: String, required: true },
    Cabinclass: { type: String, required: true },
    Airline: { type: String, required: true },
    Price: { type: String, required: true },
    Duration: { type: String, required: true },
    
    
   
}, {
  
});

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;