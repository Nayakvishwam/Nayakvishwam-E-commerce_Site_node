const { Collections } = require("../config/db_confg")
const { Variables } = require("../common/variables");
const { Functions } = require("../common/functions");
const { Tools } = require("../tools/tools");


const AddUser = async (req, res) => {
    if (!Functions.CheckValidPayload({ bodypayload: req.body, comparepayload: Variables.AddUserBody })) {
        res.status(400).send({
            status_code: 400,
            error: "Payload not accepted!"
        })
    }
    else {
        try {
            if (!Functions.CheckValidObject(req.body, null)) {
                return res.status(400).json({ status_code: 500, error: 'Missing required fields' });
            }
            const hashpassword = await Tools.HashinhString(req.body.password)
            const user = new Collections.MasterUsers(
                {
                    email: req.body.email,
                    password: hashpassword,
                    name: req.body.name,
                    phonenumber: req.body.phonenumber
                }
            )
            await user.save()
            return res.status(200).send({
                status_code: 200,
                message: "SuccesFully Add User Details!"
            })
        } catch (error) {
            return res.status(500).send({
                status_code: 500,
                message: "Internal Server Error!"
            })
        }
    }
}

const GetMasterUsers = async (req, res) => {
    const users = await Collections.MasterUsers.find({});
    return res.status(200).send({
        status_code: 200,
        message: "SuccesFully get Users Details!",
        data: users
    })
}

exports.User = {
    AddUser: AddUser,
    GetMasterUsers: GetMasterUsers
}