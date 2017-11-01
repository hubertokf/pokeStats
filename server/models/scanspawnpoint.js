/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scanspawnpoint', {
    scannedlocation_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      references: {
        model: 'scannedlocation',
        key: 'cellid'
      }
    },
    spawnpoint_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      references: {
        model: 'spawnpoint',
        key: 'id'
      }
    }
  }, {
    tableName: 'scanspawnpoint',
    timestamps: false
  });
};
