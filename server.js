// require("dotenv")();
const express = require("express");
const { connetDB } = require("./src/config/mongo");
const routes = require("./src/routes/routes");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.use("/api", routes);

app.listen(PORT, () => {
    connetDB();
    console.log('Server is running: ', PORT);
})