const express = require("express")

const {order, allOrders} = require("./user.controller");

const router = express.Router();


router.route("/order").post(order);
router.route("/allorder").get(allOrders);


module.exports = router;