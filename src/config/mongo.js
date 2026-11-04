
const mongoose = require("mongoose");

export default connetDB = async () => {
    try {
        await mongoose.connect('', () => {
            
        })
    } catch (err) {
        console.log('Getting error in mongodb', err);
    }
}