const db = require('../models');


module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({ raw: true }).then(function(dbBurger) {

            res.render('index', { dbBurger });
            // res.json(dbBurger);
        });

    });

    app.post("/api/burgers", function(req, res) {
        console.log(req.body);
        db.Burger.create({
                name: req.body.name,
                eaten: req.body.eaten
            })
            .then(function(dbBurger) {
                res.json(dbBurger);
            });
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbBurger) {
                res.json(dbBurger);
            });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbBurger) {
                res.json(dbBurger);
            });
    });

}