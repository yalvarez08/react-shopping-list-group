const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET Route to get existing shopping list
router.get('/', (req, res) => {
    let queryText = `SELECT * from "fs_react_shopping"`;

    pool.query(queryText)
    .then((result) => {
        console.log(`GET database query successful: ${queryText}`)
        res.send(result.rows);
    }).catch((err) => {
        console.log(`Error making GET query,`, err);
        res.sendStatus(500);
    })
});

//POST Route
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = `INSERT INTO "fs_react_shopping" ("name", "quantity", "unit") VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit])
    .then((result) => {
        console.log(`POST query successful: ${queryText}`)
        res.sendStatus(200);
    }).catch((err) => {
        console.log(`Error making POST query,`, err);
        res.sendStatus(500);
    });
});

//PUT Route
router.put('/:id' , (req, res) => {
    console.log('PUT request for id:', req.params.id);
    let sqlText = `UPDATE "fs_react_shopping" SET "is_purchased"=TRUE WHERE id=$1;`;

    pool.query(sqlText, [req.params.id])
    .then((result) => {
        console.log(`item successfully UPDATED: ${sqlText}`);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(`Error making PUT query`, err);
        res.sendStatus(500);
    });
})

//DELETE Route
router.delete('/:id', (req, res) => {
    console.log('DELETE request for id:', req.params.id);
    let sqlText = `DELETE FROM "fs_react_shopping" WHERE id=$1;`;
    pool.query(sqlText, [req.params.id])
    .then((result) => {
      console.log(`item successfully DELETED: ${sqlText}`);
      res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making DELETE query`, err);
        res.sendStatus(500); 
      })
})



module.exports = router;