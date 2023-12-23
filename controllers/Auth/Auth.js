require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require('../../models/User')
//register new users
async function registerUser(req, res, next) {
    try {

        const { username, email, password } = req.body;
        let user = await Users.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, msg: "That user already exists!" });
        }
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        const newUser = new Users({
            username,
            email,
            password: encryptedPassword,
        });
        newUser
            .save()
            .then(() =>
                next()
            )
            .catch((err) =>
                res.status(400).json({ msg: "something went wrong", err, success: false })
            );
    }
    catch (error) {
        console.log(error)
    }
}
//create session for existing users
async function loginUser(req, res) {
    const { email, password } = req.body;
    const userData = await Users.findOne({
        email,
    });
    if (userData === null)
        return res.status(404).json({
            msg: "user does not exist", //user not found
            success: false,
        });
    if (bcrypt.compareSync(password, userData.password)) {
        //create a json token
        const token = jwt.sign(
            {
                email,
                id: userData._id,
                ip_address: req.ip
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
        return res.json({
            success: true,
            msg: "authenticated",
            username: userData.username,
            userId: userData._id,
            token: token, //Needs to be stored in client cookies as token
        });
    } else
        res.json({
            success: false,
            msg: "authentication failed", //invalid credentials - Unauthorized
        });
}
//identifies the current user
function getUser(req, res) {
    const { id } = req.user;

    Users
        .findById(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => res.sendStatus(404));
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
};