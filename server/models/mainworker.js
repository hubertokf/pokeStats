/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mainworker', {
    worker_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    accounts_working: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    accounts_captcha: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    accounts_failed: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mainworker',
    timestamps: false
  });
};
