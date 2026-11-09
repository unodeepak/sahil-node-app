const { resp200, resp500 } = require("../../constant/resp");
const userService = require("./order.service");

exports.createOrderController = async (req, res) => {
    try {
        const data = await userService.createOrder(req, res);
        return res.status(data.statusCode).json(data);
    } catch (err) {
        return resp500(err.message);
    }
}

exports.getTotalAmountController = async (req, res) => {
    try {
        const data = await userService.getTotalAmount(req, res);
        return res.status(data.statusCode).json(data);
    } catch (err) {
        return resp500(err.message);
    }
}

exports.getTotalAmountByUserIdController = async (req, res) => {
    try {
        const data = await userService.getTotalAmountByUserId(req, res);
        return res.status(data.statusCode).json(data);
    } catch (err) {
        return resp500(err.message);
    }
}