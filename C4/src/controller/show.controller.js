const express=require('express');
const auhenticate=require('../middleware/authenticate')
const Shows=require('../model/shows.model');
const Theatre=require('../model/theatres.model');
const Screen=require('../model/screen.model');
const router=express.Router();
router.post('/',auhenticate,async(req,res)=>{
    try {
        const show=await Shows.create(req.body);
        res.status(201).json({show});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.get('/:mov',auhenticate,async(req,res)=>{
    try {
        const show=await Shows.find({movie:req.params.mov}).lean().exec();
        res.status(201).json({show});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.get('/nearest/:id/:movie',auhenticate,async(req,res)=>{
    try {
        const show=await Theatre.find({location:req.params.id}).lean().exec();
        const seat=await Shows.findById(req.params.movie).lean().exec();
        res.status(201).json({show:show, AvailableSeat:seat.total_seats});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.get('/',async(req,res)=>{
    try {
        const show=await Shows.find().lean().exec();
        res.status(201).json({show});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
module.exports=router;