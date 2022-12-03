const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // middleware -> continue to look for specific end point below
})
.get((req, res, next) => {
    res.end('Will send all the promos to you!');
})
.post((req, res, next) => {
    res.end("Will Save the promo");
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
})
.delete((req, res, next) => {
    res.end("Deleting all promos...");
});

dishRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // middleware -> continue to look for specific end point below
})
.get((req, res, next) => {
    res.end('Will send all the promos ' + req.params.promoId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported");
})
.put((req, res, next) => {
    res.end("saving promo id " + req.params.promoId + " with name " + req.body.name + " and with data " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting "+ req.params.dishId +" promos...");
});

module.exports = dishRouter;