const express = require("express")
const { MasterUsersRoutes } = require("./masterusersroutes")

const router = express.Router()

router.use("/users", MasterUsersRoutes)

exports.AllRoutes = router