/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gym', {
    gym_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    team_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    guard_pokemon_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    slots_available: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER(1),
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
    total_cp: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_scanned: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'gym',
    timestamps: false
  });
};
