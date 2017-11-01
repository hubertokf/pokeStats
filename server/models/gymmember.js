/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gymmember', {
    gym_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    pokemon_uid: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    last_scanned: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deployment_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cp_decayed: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'gymmember',
    timestamps: false
  });
};
