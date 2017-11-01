/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashkeys', {
    key: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    maximum: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    remaining: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    peak: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'hashkeys',
    timestamps: false
  });
};
