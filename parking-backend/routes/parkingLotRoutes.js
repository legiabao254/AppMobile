const express = require('express');
const router = express.Router();
const ParkingLot = require('../models/ParkingLot');

// Lấy danh sách bãi đỗ xe
router.get('/', async (req, res) => {
  try {
    const lots = await ParkingLot.find();
    res.json(lots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm mới bãi đỗ xe
router.post('/', async (req, res) => {
  try {
    const lot = new ParkingLot(req.body);
    await lot.save();
    res.status(201).json(lot);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Cập nhật bãi đỗ xe
router.put('/:id', async (req, res) => {
  try {
    const lot = await ParkingLot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lot) return res.status(404).json({ error: 'Parking lot not found' });
    res.json(lot);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xóa bãi đỗ xe
router.delete('/:id', async (req, res) => {
  try {
    const lot = await ParkingLot.findByIdAndDelete(req.params.id);
    if (!lot) return res.status(404).json({ error: 'Parking lot not found' });
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;