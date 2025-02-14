const mongosse = require('mongoose')

const userSchema = new mongosse.Schema({
    name: String,
    email: {
        type : String,
        unique : true,
        required : true,
    },
    password: String,
    profilePic: String,
    role : String,
},{
    timestamps : true
})

const userModel = mongosse.model("user",userSchema)

module.exports = userModel;