var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/book-adm', ['genres']);

//Save new genre
router.post('/genre', function (req, res, next) {
    var genre = req.body;
    if (!genre.name || !(genre.name + '')) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.genres.save(genre, function (err, genre) {
            if (err) {
                err.send(err);
            }
            res.json(genre);
        });
    }
});

//Get all genres
router.get('/genres', function (req, res, next) {
    db.genres.find(function (err, genres) {
        if (err) {
            res.send(err);
        }
        res.json(genres);
    });
});

//Edit genre
router.put('/genre/:id', function (req, res, next) {
    var genre = req.body;
    var upd = {};

    if (genre.name) {
        upd.name = genre.name;
    }
    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        })
    } else {
        db.genres.update({ _id: mongojs.ObjectId(req.params.id) }, upd, function (err, genre) {
            if (err) {
                res.send(err);
            }
            res.json(genre);
        });
    }
});

//Delete genre
router.delete('/genre/:id', function (req, res, next) {
    db.genres.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, genre) {
        if (err) {
            res.send(err);
        }
        res.json(genre);
    });
});

module.exports = router;