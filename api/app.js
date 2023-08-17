const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const orderRoutes = require('./routes/order-routes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// Add your authentication routes
app.use('/api/auth', authRoutes);

// Add your order routes
app.use('/api/orders', orderRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
