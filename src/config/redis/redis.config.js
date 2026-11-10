const { createClient } = require("redis");
const ENV = require("../env");

const redisClient = createClient({
    url: ENV.REDIS_URL,
})

redisClient.on('error', (err) => {
    console.log('Redis Error: ', err);
})

redisClient.on('connect', () => {
    console.log('=>>>>>>>>>> Redis DB successfully Connected <<<<<<<<<<<=');
})

redisClient.on('reconnecting', () => {
    console.log('Redis reconnecting');
})

async function connectRedis() {
    if (!redisClient.isOpen) {
        await redisClient.connect();
    }
}

module.exports = {
    redisClient,
    connectRedis
}