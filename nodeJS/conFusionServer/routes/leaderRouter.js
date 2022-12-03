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
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end("Will Save the leader");
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
})
.delete((req, res, next) => {
    res.end("Deleting all leaders...");
});

dishRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // middleware -> continue to look for specific end point below
})
.get((req, res, next) => {
    res.end('Will send all the leader ' + req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported");
})
.put((req, res, next) => {
    res.end("saving leader " + req.params.leaderId + " with name " + req.body.name + " and with data " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting "+ req.params.dishId +" leaders...");
});

module.exports = dishRouter;