// backend/routes/billing.js
const express = require('express');
const router = express.Router();
const Consumer = require('../models/consumer');
const Billing = require('../models/billing');

// Bill calculation logic
function calculateBill(units) {
  let amount = 0;
  if (units <= 50) {
    amount = units * 3.5;
  } else if (units <= 150) {
    amount = 50 * 3.5 + (units - 50) * 4.0;
  } else if (units <= 250) {
    amount = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2;
  } else {
    amount = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + (units - 250) * 6.5;
  }
  return amount;
}

// Create consumer
router.post('/consumer', async (req, res) => {
  try {
    const consumer = await Consumer.create(req.body);
    res.json(consumer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Calculate and save bill
router.post('/bill', async (req, res) => {
  try {
    const { consumer_id, units } = req.body;
    const amount = calculateBill(units);
    const bill = await Billing.create({ consumer_id, units, amount });
    res.json(bill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get bills for a consumer
router.get('/bills/:consumer_id', async (req, res) => {
  try {
    const bills = await Billing.findAll({
      where: { consumer_id: req.params.consumer_id }
    });
    res.json(bills);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
