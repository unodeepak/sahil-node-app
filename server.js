require("dotenv").config();
const express = require("express");
const { connetDB } = require("./src/config/mongo");
const routes = require("./src/routes/routes");
const ENV = require("./src/config/env");
const { connectRedis } = require("./src/config/redis/redis.config");
const { connectPostgresDB } = require('./src/config/sequelize');

const app = express();
app.use(express.json());
const PORT = ENV.PORT || 8000;

app.use("/api", routes);

app.listen(PORT, () => {
    connetDB();
    connectRedis();
    connectPostgresDB();
    console.log('Server is running: ', PORT);
})