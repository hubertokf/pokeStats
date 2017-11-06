var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/download', function (req, res) {
    res.download(path.resolve('public/db_bkp/bkp.sql'));
});

module.exports = router;
