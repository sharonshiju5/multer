const userSchema=require("./multer.model.js");
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

module.exports = {
    addUser 
}