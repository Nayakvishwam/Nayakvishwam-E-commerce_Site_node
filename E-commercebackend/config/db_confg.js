const mongoose = require("mongoose")
const { Models } = require("../models/users")
mongoose.connect(
    "mongodb://localhost:27017/ecommerce",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const mgdb = {}

mgdb.MasterUsers = Models.MasterUsers

exports.Collections = mgdb