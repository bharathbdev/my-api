const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
console.log("###starts")
// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://admin:admin@mongodb:27017/mydatabase';
console.log("###process.env.MONGODB_URI", process.env.MONGODB_URI, "###mongoURI", mongoURI)
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('##Connected to MongoDB');
});

// Routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`###Server is running on port ${port}`);
});