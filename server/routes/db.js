var express = require('express');
var router = express.Router();

app.get('/download', function (req, res) {
    var file = __dirname + '/db_bkp/bkp.sql';
    res.download(file); // Set disposition and send it.
});

module.exports = router;
