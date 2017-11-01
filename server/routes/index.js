var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
    res.sendfile('./views/index.html');
    // res.send('respond with a resource');
});

module.exports = router;
