const { resp200, resp500, resp409, resp400 } = require("../../constant/resp");
const Model = require("../../models");
const mongoose = require("mongoose");
const { getRedisData, createRedisData } = require('../../config/redis/redis');

exports.createOrder = async (req, res) => {
    try {
        const { body } = req;
        console.log({ body })
        const data = await Model.Order.create(body);
        const transactionBody = {
            amount: body.amount,
            isSuccess: true
        }
        const transaction = await Model.Transaction.create(transactionBody);
        return resp200('User created successfully', { data, transaction });
    } catch (err) {
        console.log('Getting Error in : ', err);
        return resp500(err.message);
    }
}

exports.getTotalAmount = async (req, res) => {
    try {
        const data = await Model.Order.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$amount" },
                    totalQty: { $sum: "$qty" }
                }
            },
            {
                $project: {
                    // _id: 1,
                    total: 1,
                    qty: "$totalQty"
                }
            }
        ]);

        return resp200('User created successfully', data);
    } catch (err) {
        console.log('Getting Error in : ', err);
        return resp500(err.message);
    }
}

exports.getTotalAmountByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const key = 'getTotalAmountByUserId';
        const redisData = await getRedisData(key);
        if (redisData) {
            return resp200('User data successfully', redisData);
        }
        const data = await Model.Order.aggregate([
            // {
            //     $match: {
            //         userId: new mongoose.Types.ObjectId(userId)
            //     }
            // },
            {
                $group: {
                    _id: "$userId",
                    total: { $sum: "$amount" },
                    totalQty: { $sum: "$qty" },
                }
            },
            {
                $lookup: {
                    from: "user",
                    foreignField: "_id",
                    localField: "_id",
                    as: "userData"
                }
            },
            {
                $unwind: "$userData"
            },
            {
                $project: {
                    _id: 0,
                    total: 1,
                    qty: "$totalQty",
                    userData: 1
                }
            }
        ]);
        createRedisData(key, data);

        return resp200('User data successfully', data);
    } catch (err) {
        console.log('Getting Error in : ', err);
        return resp500(err.message);
    }
}


/*

1) Find the total amount
2) Group of items total amount
3) Group of items total amount by userId
4) 

*/