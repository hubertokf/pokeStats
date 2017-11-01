/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locationaltitude', {
    cellid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
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
      allowNull: true
    },
    altitude: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'locationaltitude',
    timestamps: false
  });
};
