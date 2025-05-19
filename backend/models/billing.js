// backend/models/billing.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Consumer = require('./consumer');

const Billing = sequelize.define('Billing', {
  units: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  billing_date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
}, { timestamps: false });

Billing.belongsTo(Consumer, { foreignKey: 'consumer_id' });

module.exports = Billing;
