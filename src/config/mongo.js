
const mongoose = require("mongoose");
const ENV = require("../config/env");

exports.connetDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log('=======> Database connected <===========');
    } catch (err) {
        console.log('Getting error in mongodb', err);
    }
}

// x;