var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/book-adm', ['orders']);

//All orders
router.get('/orders', function (req, res, next) {
    db.orders.find({}, function (err, orders) {
        if (err) {
            res.send(err);
        }
        res.json(orders);
    });
});

//Orders by customer
router.get('/orders/:id', function (req, res, next) {
    //Getting url id by req.params.id
    db.orders.find({ customer: req.params.id }, function (err, orders) {
        if (err) {
            res.send(err);
        }
        res.json(orders);
    });
});

//Kill me.
//Update status 2
router.put('/order/:id', function (req, res, next) {
    var order = req.body;
    var upd = {};

    if (order.books) {
        upd.books = order.books;
    }

    if (order.customer) {
        upd.customer = order.customer;
    }

    if (order.customerId) {
        upd.customerId = order.customerId;
    }

    if (order.total) {
        upd.total = order.total;
    }

    if (order.date) {
        upd.date = order.date;
    }

    if (order.orderCode) {
        upd.orderCode = order.orderCode;
    }

    if (order.status) {
        upd.status = 2;
    }

    upd.processingDate = Date.now();
    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        });
    } else {
        db.orders.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, order) {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
});

//Update status 3
router.put('/order3/:id', function (req, res, next) {
    var order = req.body;
    var upd = {};

    if (order.books) {
        upd.books = order.books;
    }

    if (order.customer) {
        upd.customer = order.customer;
    }

    if (order.customerId) {
        upd.customerId = order.customerId;
    }

    if (order.total) {
        upd.total = order.total;
    }

    if (order.date) {
        upd.date = order.date;
    }

    if (order.orderCode) {
        upd.orderCode = order.orderCode;
    }

    if (order.status) {
        upd.status = 3;
    }

    if (order.processingDate) {
        upd.processingDate = order.processingDate;
    }

    upd.productionDate = Date.now();

    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        });
    } else {
        db.orders.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, order) {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
});

//Update status 4
router.put('/order4/:id', function (req, res, next) {
    var order = req.body;
    var upd = {};

    if (order.books) {
        upd.books = order.books;
    }

    if (order.customer) {
        upd.customer = order.customer;
    }

    if (order.customerId) {
        upd.customerId = order.customerId;
    }

    if (order.total) {
        upd.total = order.total;
    }

    if (order.date) {
        upd.date = order.date;
    }

    if (order.orderCode) {
        upd.orderCode = order.orderCode;
    }

    if (order.status) {
        upd.status = 4;
    }

    if (order.processingDate) {
        upd.processingDate = order.processingDate;
    }

    if (order.productionDate) {
        upd.productionDate = order.productionDate;
    }
    upd.shippedDate = Date.now();
    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        });
    } else {
        console.log(upd)
        db.orders.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, order) {
            if (err) {
                res.send(err);
            }
            res.json(order);
            console.log(order);
        });
    }
});

//Update status 5
router.put('/order5/:id', function (req, res, next) {
    var order = req.body;
    var upd = {};

    if (order.books) {
        upd.books = order.books;
    }

    if (order.customer) {
        upd.customer = order.customer;
    }

    if (order.customerId) {
        upd.customerId = order.customerId;
    }

    if (order.total) {
        upd.total = order.total;
    }

    if (order.date) {
        upd.date = order.date;
    }

    if (order.orderCode) {
        upd.orderCode = order.orderCode;
    }

    if (order.status) {
        upd.status = 5;
    }

    if (order.processingDate) {
        upd.processingDate = order.processingDate;
    }

    if (order.productionDate) {
        upd.productionDate = order.productionDate;
    }

    if (order.shippedDate) {
        upd.shippedDate = order.shippedDate;
    }

    upd.deliveredDate = Date.now();
    if (!upd) {
        res.status(400);
        res.json({
            "Error": "Bad request"
        });
    } else {
        db.orders.update({ _id: mongojs.ObjectId(req.params.id) }, upd, {}, function (err, order) {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
});

module.exports = router;