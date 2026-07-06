const Order = require('../model/order');
const sendEmail = require('../utils/sendEmail');

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;
    if (!items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({ message: 'No order items' });
    } else {
      const order = new Order({
        user: req.user._id,
        items,
        totalAmount,
        address,
        paymentId
      });
     await order.save();

      // Send Order Confirmation Email
      const message = `
        <h2>Order Confirmation</h2>
        <p>Hello ${req.user.name},</p>
        <p>Your order has been successfully placed! Order ID: <strong>${order._id}</strong></p>
        <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
        <p>It will be shipped to: ${address.street}, ${address.city}</p>
        <p>Thank you for shopping with ShopNest!</p>
      `;

      await sendEmail(req.user.email,'order created',message);

  
      res.status(201).json({
        message: 'Order created successfully',
        order
      });
    }
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      message: "Error creating order",
      error: error.message,
      stack: error.stack
    });
  }
};

const MyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.productId', 'name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'error fetchingh',error});
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'error fetchingh', error });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;
      await order.save();

      res.json({
        message: 'Order status updated',
        order,
      });
    } else {
      res.status(404).json({
        message: 'Order not found',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status',error,});
  }
};

module.exports = { createOrder, MyOrders, getOrders, updateOrderStatus };