const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Exequiel",
        lastName: "Mainero",
        email: "exequiel@gmail.com",
        password: "exequiel1234",
        phone: "+12345"
    }

    await User.create(userCreate)

}
module.exports = user