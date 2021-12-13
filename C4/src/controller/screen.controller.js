const express=require('express');
const auhenticate=require('../middleware/authenticate')
const Screen=require('../model/screen.model');
const router=express.Router();
router.post('/',auhenticate,async(req,res)=>{
    try {
        const user=req.user;
        const screen=await Screen.create({
        name:req.body.name,
        theatre:req.body.theatre,
        })
        res.status(201).json({screen})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

module.exports=router;