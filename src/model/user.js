import {DataTypes, Model} from "sequelize"


class User extends Model {}

export default function (sequelize) {
  return User.init({
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    email: {
      type: DataTypes.BOOLEAN,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: "UserModel",
    tableName: "users",
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
}
