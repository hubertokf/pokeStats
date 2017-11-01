/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemon', {
    encounter_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    spawnpoint_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    pokemon_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    latitude: {
      type: "DOUBLE",
      allowNull: false
    },
    longitude: {
      type: "DOUBLE",
      allowNull: false
    },
    disappear_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    individual_attack: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    individual_defense: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    individual_stamina: {
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
    cp: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    cp_multiplier: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    form: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'pokemon',
    timestamps: false
  });
};
