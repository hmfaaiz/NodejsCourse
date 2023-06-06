const router=require("express").Router();
const user=require("../model/user");


router.post("/", async (req, res) => {
    console.log("Post")
    const newUser=new user({
        first_name:  req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender: req.body.gender,


    })


    if (!req.body || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.gender) {
        
        return res.status(404).json("All fields are required");
    }
   
    try{
        const saveUser=newUser.save();
        return res.status(200).json(saveUser)
    }
    catch(err){
        return res.status(500).json("try again",err)
    }

});
module.exports=router;
