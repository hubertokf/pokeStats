const Gym = require('../models').gym;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
        var oOrder = req.query.order;
        var oSortby = req.query.sortby;
        var oLimit = req.query.limit;

        Gym.findAll().then(gyms => {
            res.json(gyms); // return all todos in JSON format    
        });
        
    },
};