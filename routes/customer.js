var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/book-adm', ['customers']);

//Save new customer
router.post('/customer', function (req, res, next) {
    var customer = req.body;
    if (!customer.name || !(customer.lastName + '')) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        customer.date = Date.now();
        db.customers.save(customer, function (err, customer) {
            if (err) {
                err.send(err);
            }
            res.json(customer);
        });
    }
});

//Get all customers
router.get('/customers', function (req, res, next) {
    db.customers.find(function (err, customers) {
        if (err) {
            res.send(err);
        }
        res.json(customers);
    });
});

//Update customer
router.put('/customer/:id', function (req, res, next) {
    var customer = req.body;
    var upd = {};

    if (customer.name) {
        upd.name = customer.name;
    }
    if (customer.lastName) {
        upd.lastName = customer.lastName;
    }
    if (customer.email) {
        upd.email = customer.email;
    }
    if (customer.password) {
        upd.password = customer.password;
    }
    if (customer.country) {
        upd.country = customer.country;
    }
    if (customer.street) {
        upd.street = customer.street;
    }
    if (customer.city) {
        upd.city = customer.city;
    }
    if (customer.state) {
        upd.state = customer.state;
    }
    if (customer.zip) {
        upd.zip = customer.zip;
    }
    if (customer.phone) {
        upd.phone = customer.phone;
    } 
    if (customer.gender) {
        upd.gender = customer.gender;
    }

    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        })
    } else {
        db.customers.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, customer) {
            if (err) {
                res.send(err);
            }
            res.json(customer);
        });
    }
});

//Delete customer
router.delete('/customer/:id', function (req, res, next) {
    db.customers.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
});

//Single customer
router.get('/customer/:id', function (req, res, next) {
    db.customers.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
});

module.exports = router;