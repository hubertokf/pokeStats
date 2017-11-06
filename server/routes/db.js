var express = require('express');
var router = express.Router();

router.get('/download', function (req, res) {
    var file = '../db_bkp/bkp.sql';
    res.download(file); // Set disposition and send it.
});

module.exports = router;
