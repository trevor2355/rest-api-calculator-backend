const express = require('express');
const morgan = require('morgan');
const usersRoutes = require('./routes/usersRoutes.js')
const servicesRoutes = require('./routes/servicesRoutes.js')
const recordsRoutes = require('./routes/recordsRoutes.js')

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`REST API Calculator Server listening on PORT: ${PORT}`)
})

//handle the api routes here
app.use('/api/users', usersRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/records', recordsRoutes)