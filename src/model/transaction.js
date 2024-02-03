import {DataTypes, Model} from "sequelize"


class Transaction extends Model {}

export default function (sequelize) {
  return Transaction.init({
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    app_id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: "TransactionModel",
    tableName: "transactions",
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
}
