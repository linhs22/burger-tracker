const express = require("express");
const db = require('../models');
const router = express.Router();

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.json(dbBurger);
    });

});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
            name: req.body.eaten,
            eaten: req.body.eaten,
        })
        .then(function(dbBurger) {
            res.json(dbBurger);
        });
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(function(dbBurger) {
            res.json(dbBurger);
        });
});

router.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbPost) {
            res.json(dbPost);
        });
});

// Export routes for server.js to use.
module.exports = router;