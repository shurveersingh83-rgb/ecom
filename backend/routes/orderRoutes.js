const express = require('express');
const { createOrder, MyOrders, getOrders, updateOrderStatus } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const router = express.Router();

router.route('/').post(protect, createOrder).get(protect, admin, getOrders);
router.route('/myorders').get(protect, MyOrders);
router.route('/:id/status').put(protect, admin, updateOrderStatus);

module.exports = router;