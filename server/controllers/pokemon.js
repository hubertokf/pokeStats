const Pokemon = require('../models').pokemon;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
                
        Pokemon.findAll().then(pokemons => {
            res.json(pokemons); // return all todos in JSON format    
        });
        
    },
    count(req, res) {

        Pokemon.count().then(pokemons => {
            res.json(pokemons); // return all todos in JSON format    
        });

    },
};