const router = require("express").Router();
let Ticket = require("../models/Ticket.model");

router.route("/").get((req, res) => {
    Ticket.find()
        .then((Ticket) => res.json(Ticket))
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
  

    

    const newTicket = new Ticket({
        Depdestination,
        Arridestination,
        Depdate,
        Arrdate,
        Cabinclass,
        Airline,
        Price,
        Duration,
        
       
      
    });

    newTicket
        .save()
        .then(() => res.json("Ticket Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Ticket.findById(req.params.id)
        .then((Ticket) => res.json(Ticket))
        .catch((err) => res.status(400).json("Error: " + err));
});



router.route("/:id").delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(() => res.json("Ticket deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;