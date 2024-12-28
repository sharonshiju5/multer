const {Router}=require('express');
const rh=require('./requestHandler.js');
const multer=require('multer');
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        console.log(file);
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        
        cb(null,uniqueSuffix+"_"+file.originalname)
    }
})
const upload = multer({ storage })
const router=Router();
router.route('/adduser').post(upload.array('file',15),rh.addUser);
router.route('/getuser').get(rh.getUsers);
router.route('/image/:filename').get(rh.loadImage);


module.exports=router;