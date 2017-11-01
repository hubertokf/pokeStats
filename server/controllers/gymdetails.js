const GymDetails = require('../models').gymdetails;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
                
      GymDetails.findAll().then(gymsdetails => {
            res.json(gymsdetails); // return all todos in JSON format    
        });
        
    },
};