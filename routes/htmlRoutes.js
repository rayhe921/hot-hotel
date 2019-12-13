var db = require("../models");

module.exports = function(app) {
  app.get("/rooms", function(req, res) {
    res.render("rooms");
  });

  // app.get("/", (req, res) => {
  //   res.render("index", {
  //     // stripePublishableKey: keys.stripePublishableKey
  //   });
  // });

  app.get("/client/:id", function(req, res) {
    db.Client.findOne({ where: { id: req.params.id } }).then(function(hoteldb) {
      res.render("client", {
        client: hoteldb
      });
    });
  });

  //catch-all route that leads to home.html
  app.use(function(req, res) {
    res.render("index");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
