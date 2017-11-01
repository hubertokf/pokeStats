const Trainer = require('../models').trainer;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {

        Trainer.rank().then(trainers => {
            res.json(trainers); // return all todos in JSON format    
        });
        
    },
    count(req,res) {
        Trainer.countAll().then(trainers => {
            res.json(trainers); // return all todos in JSON format    
        });
    }
};