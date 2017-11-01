/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('token', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'token',
    timestamps: false
  });
};
