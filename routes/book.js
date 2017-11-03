var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/book-adm', ['books']);
var multer = require('multer');
var upload = multer({ dest: './src/assets/uploads/' });
var fs = require('fs');

//Save new book with image.
router.post('/book', upload.any(), function (req, res, next) {
    if (req.files) {
        req.files.forEach(function (file) {
            var filename = (new Date).valueOf() + "-" + file.originalname
            fs.rename(file.path, './src/assets/uploads/' + filename, function (err) {
                if (err) throw err;
                var pagesConverted = parseInt(req.body.pages);
                var priceConverted = parseFloat(req.body.price);
                var book = {
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    pages: pagesConverted,
                    price: priceConverted,
                    language: req.body.language,
                    publisher: req.body.publisher,
                    pubDate: req.body.pubDate,
                    image: filename,
                    date: Date.now(),
                    genre: {
                        _id: req.body.genreId,
                        name: req.body.genreName
                    }
                }
                db.books.save(book, function (err, books) {
                    if (err) {
                        err.send(err);
                    }
                    res.json(book);
                });
            });
        });
    }
});

//Get all books
router.get('/books', function (req, res, next) {
    db.books.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        res.json(books);
    });
});

//Update book 
router.put('/book/:id', function (req, res, next) {
    var book = req.body;
    var upd = {};

    if (book.image) {
        upd.image = book.image;
    }

    if (book.title) {
        upd.title = book.title;
    }

    if (book.author) {
        upd.author = book.author;
    }

    if (book.bookName) {
        upd.bookName = book.bookName;
    }

    if (book.description) {
        upd.description = book.description;
    }

    if (book.pages) {
        upd.pages = book.pages;
    }

    if (book.price) {
        upd.price = book.price;
    }

    if (book.language) {
        upd.language = book.language;
    }

    if (book.publisher) {
        upd.publisher = book.publisher;
    }

    if (book.pubDate) {
        upd.pubDate = book.pubDate;
    }
    if (book.genre) {
        upd.genre = book.genre;
    }

    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        })
    } else {
        db.books.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, book) {
            if (err) {
                res.send(err);
            }
            res.json(book);
        });
    }
});

//Delete book
router.delete('/book/:id', function (req, res, next) {
    db.books.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});

//Single book
router.get('/book/:id', function (req, res, next) {
    db.books.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});

module.exports = router;
