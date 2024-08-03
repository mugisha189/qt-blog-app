import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import User from "./User";

class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public shortDescription!: string;
  public image!: string;
  public authorId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    shortDescription: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    image: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    content: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "posts",
  }
);

Post.belongsTo(User, { foreignKey: "authorId", as: "author" });

export default Post;
