const auth = require('basic-auth');

const adminBasicAuth = (req, res, next) => {
    console.log("admin basic auth middleware triggered");
    next();
}

module.exports = {adminBasicAuth}