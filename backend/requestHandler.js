const userSchema=require("./multer.model.js");
const path=require('path');
async function addUser(req,res) {
    try {
        console.log(req.body);
    console.log(req.files);
    
    const file=req.files;
    const{username,email,phone}=req.body;
    const data=await userSchema.create({username,email,phone,file})

    res.status(200).send({data})
    } catch (error) {
        console.log(error);
        
    }
}
async function getUsers(req,res) {
    try {
        const user=await userSchema.find();
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        
    }
    
}
async function loadImage(req,res) {
    const {filename}=req.params
    return res.sendFile(path.resolve(`./uploads/${filename}`))
    
}



module.exports = {
    addUser,
    getUsers,
    loadImage
}