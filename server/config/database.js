const mongoose = require('mongoose');
require("dotenv").config();

// Exporting a function to establish database connection
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        dbName: "StudyNotion",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection established successfully");
    })
    .catch((error) => {
        // If connection fails, log the error and exit the process
        console.error("DB connection failed:", error);
        process.exit(1);
    });

    // Monitoring for disconnected state
    mongoose.connection.on('disconnected', () => {
        console.log("DB disconnected. Trying to reconnect...");
        // Attempt to reconnect
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    // Handling connection error
    mongoose.connection.on('error', (error) => {
        console.error("DB connection error:", error);
    });

    // Close the Mongoose connection if the Node process ends
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log("Mongoose disconnected through app termination");
            process.exit(0);
        });
    });
};
