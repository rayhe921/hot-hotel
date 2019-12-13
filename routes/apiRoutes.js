var db = require("../models");
const stripe = require("stripe")("sk_test_c9FfxLCFgbd0z459pCweEIKx00DqdPgiHq");

module.exports = function(app) {
  // Get all examples
  app.get("/api/clients", function(req, res) {
    db.Client.findAll({}).then(function(hoteldb) {
      res.json(hoteldb);
    });
  });

  // Create a new example
  app.post("/api/clients", function(req, res) {
    db.Client.create(req.body).then(function(hoteldb) {
      res.json(hoteldb);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    db.Client.destroy({ where: { id: req.params.id } }).then(function(hoteldb) {
      res.json(hoteldb);
    });
  });

  // Create a new example
  app.post("/charge", function(req, res) {
    const token = req.body.stripeToken; // Using Express
    (async () => {
      const charge = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "Example charge",
        source: token
      });
      res.json({ charge });
    })();
    console.log("Here");
  });
};

// Token is created using Stripe Checkout or Elements!
// Get the payment token ID submitted by the form:
