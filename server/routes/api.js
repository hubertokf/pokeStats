var express = require('express');
var router = express.Router();

var gym = require('../controllers').gym;
var gymdetails = require('../controllers').gymdetails;
var gymmember = require('../controllers').gymmember;
var gympokemon = require('../controllers').gympokemon;
var pokemon = require('../controllers').pokemon;
var raid = require('../controllers').raid;
var trainer = require('../controllers').trainer;


/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });


router.get('/gyms', gym.show);
router.get('/gymdetails', gymdetails.show);
router.get('/gymmembers', gymmember.show);
router.get('/gympokemons', gympokemon.show);
router.get('/pokemons', pokemon.show);
router.get('/pokemons/count', pokemon.count);
router.get('/raids', raid.show);
router.get('/trainers', trainer.show);
router.get('/trainers/count', trainer.count);

module.exports = router;
