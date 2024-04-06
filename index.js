// This is the main file first of all we create an express app in app.js and then import it
import app from "./app.js";
import db from "./models/index.js";
import dotenv from "dotenv";
import Agency from "./models/agency.js";
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

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const newAgency = await Agency.create({
      agency_name: "Ram Shyam Travels",
      agency_gst_number: "XXXYXXYYXXX",
      agency_email: "john@example.com",
    });
    console.log("New Agency created with ID:", newAgency.agency_id);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
