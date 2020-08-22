const express = require("express");
const router = express.Router();
const dataBase = require("../database/database");
const adminAuth = require("../middleware/authToken");

router.get("/product/:ean",(req, res) => {
    var ean = req.params.ean;
    dataBase.select('ean','description','ncm','cest').table("product").where('ean',ean).then(product => {
        res.json({ product })
    }).catch(err => {
        res.sendStatus(404)
    })
})

module.exports = router;