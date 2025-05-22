require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const parkingLotRoutes = require('./routes/parkingLotRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Phải có dòng này để nhận JSON body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/parking-lots', parkingLotRoutes);

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB Atlas:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});