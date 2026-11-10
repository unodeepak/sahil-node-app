const { Sequelize } = require("sequelize");
const ENV = require("./env");

const sequelize = new Sequelize(
    ENV.DB_NAME,
    ENV.DB_USER,
    ENV.DB_PASSWORD,
    {
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        dialect: ENV.DB_DIALECT,

        logging: false,

        pool: {
            max: 20,
            min: 2,
            acquire: 30000,
            idle: 10000
        },
        retry: {
            max: 3
        },

        dialectOptions: {
            application_name: "node-sequelize-api"
        }
    }
);

const connectPostgresDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('DB connected');
    } catch (err) {
        console.log('Getting error in PostgresDB: ', err);
        throw err;
    }
}

module.exports = {
    connectPostgresDB,
    sequelize
}