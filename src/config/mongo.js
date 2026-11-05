
const mongoose = require("mongoose");

exports.connetDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sahil-node-app');
        console.log('=======> Database connected <===========');
    } catch (err) {
        console.log('Getting error in mongodb', err);
    }
}

// x;