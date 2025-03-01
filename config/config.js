const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection =async() => {
    try {
        console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Base de datos conectada con exito');
    } catch (error) {
        console.error(error);
        throw new Error('error a la hora de iniciar la base de datos')
    }
};

module.exports = {
    dbConnection,
};