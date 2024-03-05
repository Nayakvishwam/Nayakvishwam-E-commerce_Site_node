const mongoose = require("mongoose")
const masterusers = {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    phonenumber: { type: String, require: true }
}
const MasterUsers = mongoose.model("MasterUsers", masterusers)
exports.Models = { MasterUsers: MasterUsers }