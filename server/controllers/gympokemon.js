const GymPokemon = require('../models').gympokemon;
var Sequelize = require('sequelize');

module.exports = {
    show(req, res) {    
                
      GymPokemon.find().then(gymspokemons => {
            res.json(gymspokemons); // return all todos in JSON format    
        });
        
    },
};