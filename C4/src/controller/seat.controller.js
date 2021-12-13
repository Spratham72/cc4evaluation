const express=require('express');
const auhenticate=require('../middleware/authenticate')
const Seat=require('../model/seat.model');
const Show=require('../model/shows.model');
const router=express.Router();
router.post('/',auhenticate,async(req,res)=>{
    try {
        const user=req.user;
        const seat=await Seat.create(req.body)
        res.status(201).json({seat})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});
router.get('/:id',auhenticate,async(req,res)=>{
    try {
        const seat=await Show.findById(req.params.id);
        res.status(201).json({seat:seat.total_seats})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

router.post('/book/:movie/:seat',auhenticate,async(req,res)=>{
    try {
        const available=await Show.find({show:req.params.movie})
        if(available.total_seats<req.params.seat){
            res.status(400).json({error:"Seats not available"});
        }
        res.status(201).json({message:"Seats booked"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});


module.exports=router;