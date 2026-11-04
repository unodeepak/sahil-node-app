exports.resp200 = (msg = '', data = {}) => {
    return {
        statusCode: 200,
        msg,
        data,
        success: true
    }
}

exports.resp400 = (msg = '', data = {}) => {
    return {
        statusCode: 400,
        msg,
        data,
        success: false
    }
}

exports.resp500 = (msg = 'Internal Server Error', data = {}) => {
    return {
        statusCode: 500,
        msg,
        data,
        success: false,
    }
}

exports.resp409 = (msg = '', data = {}) => {
    return {
        statusCode: 409,
        msg,
        data,
        success: false,
    }
}