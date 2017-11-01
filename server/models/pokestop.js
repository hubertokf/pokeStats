/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokestop', {
    pokestop_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
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
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lure_expiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active_fort_modifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'pokestop',
    timestamps: false
  });
};
