/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var gympokemon = sequelize.define('gympokemon', {
    pokemon_uid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    pokemon_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    cp: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    trainer_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    num_upgrades: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    move_1: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    move_2: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    stamina: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    stamina_max: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    cp_multiplier: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    additional_cp_multiplier: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    iv_defense: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    iv_stamina: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    iv_attack: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'gympokemon',
    timestamps: false
  });

  gympokemon.find = find => {
    return new Promise(function (resolve, reject) {
      sequelize.query("SELECT *, pi.name as pokemon_name, mi.name as move_1_name, mi2.name as move_2_name, CONCAT(FORMAT((((iv_attack+iv_defense+iv_stamina)/45)*100),2),'%') as iv FROM pokemappel_sam.gympokemon as gp JOIN pokeid as pi ON gp.pokemon_id = pi.id JOIN moveid as mi ON gp.move_1 = mi.id JOIN moveid as mi2 ON gp.move_2 = mi2.id ORDER BY cp DESC limit 2000", { type: sequelize.QueryTypes.SELECT })
        .then((pokemons) => {
          resolve(pokemons);
        }).catch((err) => {
          reject(err);
        })
    });
  }

  return gympokemon;
};
