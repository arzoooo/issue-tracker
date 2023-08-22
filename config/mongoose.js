// connected to database
const mongoose = require('mongoose');

//mongoose.connect('mongodb://0.0.0.0/Issue-Tracker');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/your-app-name');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;