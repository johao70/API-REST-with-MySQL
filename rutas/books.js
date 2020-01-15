const express = require('express');

const router = express.Router();

const Book = require('../models/book');

router.get('/books', (req, res, next) => {
    Book.findAll()
        .then( books => {
            res.json( books )
        })
        .catch( err => {
            res.send( 'error: ' + err )
        })
});

router.post('/books', (req, res, next) => {
    if (!req.body.book_name) {
        res.status(400);
        res,json({
            error: 'Datos incorrectos'
        })
    } else {
        Book.create(req.body)
            .then( data => {
                res.send( data );
            })
            .catch( err => {
                res.json( 'error: ' + err );
            })
    }
});

module.exports = router;