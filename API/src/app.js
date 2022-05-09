const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

// Testing app
console.log('Hello World!');

// Routes configuration
app.use('/', mainRoutes);

// Port configuration
app.listen(process.env.PORT || 4000, () => console.log('Server running on port 4000')); 