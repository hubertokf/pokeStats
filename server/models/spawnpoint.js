/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spawnpoint', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    latitude: {
      type: "DOUBLE",
      allowNull: false
    },
    longitude: {
      type: "DOUBLE",
      allowNull: false
    },
    last_scanned: {
      type: DataTypes.DATE,
      allowNull: false
    },
    kind: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    links: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    missed_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    latest_seen: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    earliest_unseen: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'spawnpoint',
    timestamps: false
  });
};
