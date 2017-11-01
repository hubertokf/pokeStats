/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scannedlocation', {
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
    done: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    band1: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    band2: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    band3: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    band4: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    band5: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    midpoint: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    width: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'scannedlocation',
    timestamps: false
  });
};
