const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sushmithar31:Sigillumxxix@9889@cluster1.mx8ufes.mongodb.net/mern-shopping?retryWrites=true&w=majority');

module.exports = mongoose.connection;
