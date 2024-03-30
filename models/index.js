import { dataBaseConfiguration } from "../config/dbConfig";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  dataBaseConfiguration.database,
  dataBaseConfiguration.user,
  dataBaseConfiguration.password,
  {
    host: dataBaseConfigeration.host,
    dialect: dataBaseConfigeration.dialect,
    port: dataBaseConfigeration.port,
    pool: {
      max: dataBaseConfigeration.pool.max,
      min: dataBaseConfigeration.pool.min,
      acquire: dataBaseConfigeration.pool.acquire,
      idle: dataBaseConfigeration.pool.idle,
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
