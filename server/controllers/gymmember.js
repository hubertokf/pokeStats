const GymMember = require('../models').gymmember;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
                
      GymMember.findAll().then(gymsmembers => {
            res.json(gymsmembers); // return all todos in JSON format    
        });
        
    },
};