var express = require('express');

let DB = require("../db/db");
var router = express.Router();

/* GET ads listing. */
router.get('/search', async(req, res) => {
    let params = req.query;
    try {
        let db = await DB();
        let query = params.q == "*" ? {} : { $text: {$search: params.q} }
        let result = await db.collection("ads").aggregate([{
            $match: query
        }, {
            $graphLookup: {
                from: "companies",
                startWith: "$companyId",
                connectFromField: "companyId",
                connectToField: "_id",
                as: "company"
            }},{
                $unwind: "$company"
            }]).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;
