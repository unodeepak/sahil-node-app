const { resp200, resp500, resp409, resp400 } = require("../../constant/resp");
const Model = require("../../models");

exports.createUser = async (req, res) => {
    try {
        const { body } = req;
        const isExist = await Model.User.findOne({ email: body.email });
        if (isExist) {
            return resp400(`Email Id ${body.email} is already exist`);
        }
        const data = await Model.User.create(body);
        return resp200('User created successfully', data);
    } catch (err) {
        console.log('Getting Error in : ', err);
        return resp500(err.message);
    }
}