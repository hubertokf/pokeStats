/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workerstatus', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    worker_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    success: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fail: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    no_items: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    skip: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    captcha: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    last_scan_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    longitude: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'workerstatus',
    timestamps: false
  });
};
