const { resp200, resp500 } = require("../../constant/resp");
const userService = require("./user.service");

exports.createUserController = async (req, res) => {
    try {
        const data = await userService.createUser(req, res);
        return res.status(data.statusCode).json(data);
    } catch (err) {
        return resp500(err.message);
    }
}