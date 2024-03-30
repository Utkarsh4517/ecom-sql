import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

export const dataBaseConfiguration = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: "mysql",
    pool:{
         max:5,
         min:0,
         acquire:30000,
         idle:10000
    }
}