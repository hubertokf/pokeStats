/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('versions', {
    key: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    val: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'versions',
    timestamps: false
  });
};
