'use strict';
const mongoose = require('mongoose');
const uri = process.env.DB_URI || 'mongodb://localhost:27017/myFirstDatabase';
mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log("MongoDB connection error: ", err.message));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

exports.mongoose = mongoose;