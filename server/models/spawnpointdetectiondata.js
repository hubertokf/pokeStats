/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spawnpointdetectiondata', {
    id: {
      type: DataTypes.STRING(54),
      allowNull: false,
      primaryKey: true
    },
    encounter_id: {
      type: DataTypes.STRING(54),
      allowNull: false
    },
    spawnpoint_id: {
      type: DataTypes.STRING(54),
      allowNull: false
    },
    scan_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tth_secs: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'spawnpointdetectiondata',
    timestamps: false
  });
};
