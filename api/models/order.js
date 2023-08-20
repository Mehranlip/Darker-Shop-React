const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  items: { type: Array },
  userId: { type: String },
  userData: { type: Object }
})

module.exports = mongoose.model('Order', orderSchema)
