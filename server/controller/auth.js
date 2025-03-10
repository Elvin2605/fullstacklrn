const login = async(req , res) => {
    const {email,password} = req.body
    if (!email || !password){
        return res.status(400).json({"message" : "Email not found !","success":false})
    }

}



module.exports = {login}