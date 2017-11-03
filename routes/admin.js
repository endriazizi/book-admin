var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/book-adm', ['admins']);

//Save new admin.
router.post('/admin', function (req, res, next) {
    var admin = req.body;
    if (!admin.name || !(admin.lastName + '') || !(admin.email + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.admins.save(admin, function (err, admins) {
            if (err) {
                err.send(err);
            }
            res.json(admin);
        });
    }
});

//Login admin
router.post('/login', function (req, res, next) {
    var admin = req.body;
    if (!admin.email || !(admin.password + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.admins.findOne({ email: admin.email, password: admin.password }, function (err, admins) {
            if (err) {
                res.send(err);
            }
            res.json(admins);
            if (admins == null) {
                console.log('No user found');
            } else {
                console.log('Admin logged: ' + JSON.stringify(admins));
            }
        });
    }
});

//Logout admin
router.post('/logout', function (req, res, next) {
    var admin = req.body;
    if (!admin.email || !(admin.password + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.admins.findOne({ email: admin.email, password: admin.password }, function (err, admins) {
            if (err) {
                res.send(err);
            }
            res.json(admins);
            if (admins == null) {
                console.log('No user found');
            } else {
                console.log(JSON.stringify(admins.name) + ' logget out');
                admins == null;
                
            }
        });
    }
});

module.exports = router;