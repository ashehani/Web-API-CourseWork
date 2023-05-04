const router = require("express").Router();
let Cart = require("../models/Cart.model");

router.route("/").get((req, res) => {
    Cart.find()
        .then((Cart) => res.json(Cart))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const Depdestination = req.body.Depdestination;
    const Arridestination = req.body.Arridestination;
    const Depdate  = req.body.Depdate;
    const Arrdate = req.body.Arrdate;
    const Cabinclass = req.body.Cabinclass;
    const Airline = req.body.Airline;
    const Price = req.body.Price;
    const Duration = req.body.Duration;
  

    

    const newCart = new Cart({
        Depdestination,
        Arridestination,
        Depdate,
        Arrdate,
        Cabinclass,
        Airline,
        Price,
        Duration,
        
       
      
    });

    newCart
        .save()
        .then(() => res.json("Cart Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Cart.findById(req.params.id)
        .then((Cart) => res.json(Cart))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;