const User = require("../models/user");
const bcrypt = require("bcrypt")
const saltRounds = 10

const createUserService = async (name, email, password) => {
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds)
        let result = await User.create({
            name: name,
            email: email,
            password: hashPassword,
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const loginService = async (email, password) => {
    try {
        // Hàm find trả về một array
        // Hàm findOne trả về một phần tử
        const user = await User.findOne({email: email})
        console.log(">>> Check use: ", user)
        if (user) {
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (!isMatchPassword) {
                return {
                    EC: 2, 
                    EM: "Email/Passwod không hợp lệ"
                }
            } else {
                // create access token
                return "create access token"
            }
        } else {
            return {
                EC: 1,
                EM: "Email/Password không hợp lệ"
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}





module.exports = {
    createUserService,
    loginService,
}