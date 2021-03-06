const Sequelize = require('sequelize');

// Establish the connection 
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PW, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  logging: false
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;