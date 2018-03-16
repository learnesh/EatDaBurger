var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

    // Create all our routes and set up logic within those routes where required.
    router.get("/", function (req, res) {
        console.log("get");
            burgers.all(function (data) {
                var burgersObject = {
                burgersData: data
            };

            console.log("burgers object" + JSON.stringify(data));
    });


    router.get("/api/burgers", function (req, res) {
            console.log("get api");
            burgers.all(function (data) {
            return res.json(data);
        });
    });

    router.post("/api/burgers", function (req, res) {
        console.log("post burger", req.body);
        burgers.create(
            ['burger_name', 'devoured'], [req.body.burger_name, false],
            function (result) {
                console.log(result);
                return res.redirect("/");
            });
        });

        router.put("/api/burgers/:id", function (req, res) {
            // update row where id = the parameter of id
            var condition = "id = " + req.params.id;
            console.log("Updating at: " + condition);
            burgers.update({
                devoured: req.body.devoured 
        
            });
        });

        router.delete("/api/burgers/:id", function (req, res) {
            // delete row where id = the parameter of id
            var condition = "id = " + req.params.id;
            console.log("Deleting burger at: " + condition);
            burgers.delete(condition, function(result) {
                    return res.redirect("/"); 
            });
        });
   

//Export routes for server.js to use
module.exports = router; 
