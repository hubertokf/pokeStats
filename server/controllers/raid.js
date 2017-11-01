const Raid = require('../models').raid;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
                
        Raid.findAll().then(raids => {
            res.json(raids); // return all todos in JSON format    
        });
        
    },
};