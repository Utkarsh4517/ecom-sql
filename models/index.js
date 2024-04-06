import { dataBaseConfiguration } from "../config/dbConfig.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  dataBaseConfiguration.database,
  dataBaseConfiguration.user,
  dataBaseConfiguration.password,
  {
    host: dataBaseConfiguration.host,
    dialect: dataBaseConfiguration.dialect,
    port: dataBaseConfiguration.port,
    pool: {
      max: dataBaseConfiguration.pool.max,
      min: dataBaseConfiguration.pool.min,
      acquire: dataBaseConfiguration.pool.acquire,
      idle: dataBaseConfiguration.pool.idle,
    },
  }
);

async function testFunction() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
}

testFunction();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false });

export default db;
