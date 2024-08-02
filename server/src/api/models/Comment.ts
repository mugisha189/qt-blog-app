import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import User from "./User";
import Post from "./Post";

class Comment extends Model {
  public id!: number;
  public content!: string;
  public authorId!: number; 
  public postId!: number; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
    postId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Post,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "comments",
  }
);
Comment.belongsTo(User, { foreignKey: "authorId", as: "author" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });

export default Comment;
