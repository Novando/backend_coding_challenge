import {DataTypes, Model} from "sequelize"


class App extends Model {}

export default function (sequelize) {
  return App.init({
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    priceTier: {
      type: DataTypes.INTEGER,
      field: 'price_tier',
      validate: {
        max: 10,
        min: 1,
      },
    },
    kind: {
      type: DataTypes.TEXT,
      validate: {
        isIn: [['GAME', 'ART', 'PROGRAMMING', 'MUSIC', 'LITERATURE']],
      },
    },
    name: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    published: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: "AppModel",
    tableName: "apps",
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
}
