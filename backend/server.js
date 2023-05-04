const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully");
})

const TicketRouter = require('./routes/Ticket');
const CartRouter = require('./routes/Cart');
const CheckoutRouter = require('./routes/Checkout');

app.use('/Ticket', TicketRouter);
app.use('/Cart', CartRouter);
app.use('/Checkout',CheckoutRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});