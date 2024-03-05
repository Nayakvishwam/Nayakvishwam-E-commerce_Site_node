const express = require("express")
const { User } = require("../controllers/masteruserscontroller")
const router = express.Router()

router.post("/addbaseusers", User.AddUser)
router.get("/getbaseusers", User.GetMasterUsers)
exports.MasterUsersRoutes = router