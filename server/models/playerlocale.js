/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playerlocale', {
    location: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'playerlocale',
    timestamps: false
  });
};
