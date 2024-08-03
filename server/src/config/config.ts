import dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const config = {
  PORT: Number(process.env.PORT) || 5000,
  MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
  MYSQL_PORT: Number(process.env.MYSQL_PORT) || 3306,
  MYSQL_USER: process.env.MYSQL_USER || "root",
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "",
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || "qt-blog",
  BCRYPT_SALT: parseInt(process.env.BCRYPT_SALT || "12"),
  ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET || "qt-blog",
  APP_URL: process.env.APP_URL || "http://localhost:5000",
};

export default config;
