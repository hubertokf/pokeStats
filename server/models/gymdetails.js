/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gymdetails', {
    gym_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    last_scanned: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'gymdetails',
    timestamps: false
  });
};
