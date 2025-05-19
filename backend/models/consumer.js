// backend/models/consumer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Consumer = sequelize.define('Consumer', {
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { timestamps: false });

module.exports = Consumer;
