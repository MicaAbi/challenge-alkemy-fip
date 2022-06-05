const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const apiTransactionsRoutes = require('./routes/api/apiTransactionsRoutes');
const apiUsersRoutes = require('./routes/api/apiUsersRoutes');
const session = require('express-session');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret:'This is a secret'}));

// Routes configuration
app.use('/', mainRoutes);
app.use('/api/transactions', apiTransactionsRoutes)
app.use('/api/users', apiUsersRoutes)


// Port configuration
app.listen(process.env.PORT || 4000, () => console.log('Server running on port 4000')); 