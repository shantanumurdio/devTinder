const authAdmin = (req,res,next)=> {
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized){
        res.status(401).send("Unathorized request send")
    }
    else{
        next();
    }
} 

module.exports = {
    authAdmin,
}