/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Trainer = sequelize.define('trainer', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    team: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'trainer',
    timestamps: false
  });
    
  Trainer.rank = rank => { return new Promise(function (resolve, reject) {
    sequelize.query("SELECT *, CASE team WHEN 1 THEN 'Mystic' WHEN 2 THEN 'Valor' WHEN 3  THEN 'Instinct' ELSE 'Sucker' END as teamname, CASE WHEN @prevRank = level THEN @curRank WHEN @prevRank := level THEN @curRank := @curRank + 1 END AS rank FROM trainer t, (SELECT @curRank :=0, @prevRank := NULL) r ORDER BY level desc", { type: sequelize.QueryTypes.SELECT })
      .then( (trainers) => {
        resolve(trainers);
      }).catch((err)=>{
        reject(err);
      })
    });
  }

  Trainer.countAll = countAll => {
    return new Promise(function (resolve, reject) {
      sequelize.query("SELECT team,COUNT(*) as count FROM pokemappel_sam.trainer GROUP BY team ORDER BY count DESC;", { type: sequelize.QueryTypes.SELECT })
        .then((count) => {
          resolve(count);
        }).catch((err) => {
          reject(err);
        })
    });
  }

  return Trainer;
};