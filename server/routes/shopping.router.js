const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET Route
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "fs_react_shopping"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

//POST Route
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "fs_react_shopping" ("name", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [req.body.name, req.body.role])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});




module.exports = router;