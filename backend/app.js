// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./sequelize');
const billingRoutes = require('./routes/billing');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', billingRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
