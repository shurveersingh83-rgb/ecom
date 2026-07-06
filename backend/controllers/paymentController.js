const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const createOrder = async (req, res) => {
  try {
    console.log("========== CREATE ORDER ==========");
    console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
    console.log(
      "KEY SECRET:",
      process.env.RAZORPAY_KEY_SECRET ? "Loaded" : "Not Loaded"
    );

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Number(req.body.amount) * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await instance.orders.create(options);

    console.log("Order Created:", order);

    return res.status(200).json(order);

  } catch (error) {
    console.log("========== RAZORPAY ERROR ==========");
    console.log(error);
    console.log("Status Code:", error.statusCode);
    console.log("Error:", error.error);
    console.log("Description:", error.error?.description);
    console.log("===================================");

    return res.status(500).json({
      success: false,
      message: error.error?.description || error.message,
      error,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Payment verification failed",
    });

  } catch (error) {
    console.log("VERIFY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
};