const router = require("express").Router();
let Checkout = require("../models/Checkout.model");

router.route("/").get((req, res) => {
    Checkout.find()
        .then((Checkout) => res.json(Checkout))
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
    const Meal = req.body.Meal;
    const Seat = req.body.Seat;
  

    

    const newCheckout = new Checkout({
        Depdestination,
        Arridestination,
        Depdate,
        Arrdate,
        Cabinclass,
        Airline,
        Price,
        Duration,
        Meal,
        Seat,
        
       
      
    });

    newCheckout
        .save()
        .then(() => res.json("Checkout Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});




router.route('/update/:id').post((req, res) => {
    Checkout.findById(req.params.id)
        .then(Checkout => {
            Checkout.Depdestination = req.body.Depdestination;
            Checkout.Arridestination = req.body.Arridestination;
            Checkout.Arrdate =req.body.Arrdate;
            Checkout.Cabinclass = req.body.Cabinclass;
            Checkout.Airline = req.body.Airline;
            Checkout.Price =req.body.Price;
            Checkout.Duration =req.body.Duration;
            Checkout.Meal =req.body.Meal;
            Checkout.Seat =req.body.Seat;


            Checkout.save()
                .then(() => res.json('Checkout updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;