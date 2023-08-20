const Order = require('../models/order')

async function createOrder(req, res) {
  const { items, userId, userData } = req.body

  const newOrder = new Order({ items, userId, userData })

  await newOrder.save()

  res.send(JSON.stringify({ url: 'http://localhost:5173/success' }))
}

exports.createOrder = createOrder
