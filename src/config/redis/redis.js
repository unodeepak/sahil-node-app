const { redisClient } = require("./redis.config");

exports.getRedisData = async (key) => {
  try {
    const data = await redisClient.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  } catch (err) {
    console.log("getting error in getRedisData: ", err);
    return null;
  }
};

exports.createRedisData = async (key, data, ttl = 300) => {
  try {
    await redisClient.set(key, JSON.stringify(data), { EX: ttl });
  } catch (err) {
    console.log("getting error in createRedisData: ", err);
    return null;
  }
};

exports.delRedisData = async (key) => {
  try {
    const data = await redisClient.del(key);
    return true;
  } catch (err) {
    console.log("getting error in getRedisData: ", err);
    return false;
  }
};
