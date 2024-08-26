const userModel = require('../../models/userModel')

const userDetailsController = async(req,res) => {
    try {

        console.log("userId", req.userId)

        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "user details"
        })  

        console.log("User", user);

        
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


module.exports = userDetailsController;