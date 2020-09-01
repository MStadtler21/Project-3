const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
const app = express();
const Inventory= require("./models/Inventory");
require("dotenv/config");

//Define router routes
const inventoryRoutes = require("./routes/api/inventories");

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/inventory", inventoryRoutes);

const data = {
  cost: 50,
  quantity: 50,
  unitCost: 1, //calculate ??
  itemType: "yes",
  produce: "yes",
  meat: "no",
  driedGoods: "no",
   
};

Inventory.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Database connected.")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
