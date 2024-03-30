// This is the main file first of all we create an express app in app.js and then import it
import app from "./app";
import db from "./models/index";
import dotenv from "dotenv"
// set the port number from the environment var, if not exists then 3000
const PORT = process.env.PORT || 3000;
dotenv.config({
  path: "./.env",
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect database", err);
  });

//
