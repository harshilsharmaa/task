const axios = require('axios');
const bcrypt = require('bcrypt');
const {v4 : uuidv4} = require('uuid');

var db = require('../../models');

const Order = db.order;

exports.order = async (req, res) => {
    try {

        const orderID = uuidv4();

        const salt = await bcrypt.genSalt(15);
        const order_id = await bcrypt.hash(orderID, salt);

        const paymentData = {
            merchant_id:req.body.merchant_id,
            username: req.body.username,
            password: req.body.password,
            api_key: "jtest123",
            order_id,
            total_price: req.body.total_price,
            CurrencyCode: req.body.CurrencyCode,
            error_url:"https://api.upayments.com/test-payment",
            success_url:"https://api.upayments.com/test-payment",
            test_mode:"1",
            CstFName: req.body.CstFName,
            CstEmail: req.body.CstEmail,
            CstMobile: req.body.CstMobile,
            payment_gateway:"cc",
            ProductTitle: req.body.ProductTitle,
        };



        const resData = await  axios.post('https://api.upayments.com/test-payment', paymentData);

        const order = await Order.create({
            order_id,
        });

        res.status(200).json({
            status: 'success',
            data: resData.data,
            message: 'Order created successfully',
            success: true
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}


exports.allOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({});
        res.status(200).json({
            status: 'success',
            data: orders,
            message: 'Orders fetched successfully',
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}