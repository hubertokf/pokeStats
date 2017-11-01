/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raid', {
    gym_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    spawn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pokemon_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    cp: {
      type: DataTypes.INTEGER(11),
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
    last_scanned: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'raid',
    timestamps: false
  });
};
