const express=require('express');
const auhenticate=require('../middleware/authenticate')
const Movie=require('../model/movie.model');
const upload=require('../utils/profilePhoto');
const router=express.Router();
router.post('/',auhenticate,upload.single("profile"),async(req,res)=>{
    try {
        const movie=await Movie.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.file.path
        });
        res.status(201).json({movie});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});

router.get('/:id',auhenticate,async(req,res)=>{
    try {
        const movie=await Movie.find().lean().exec();
        let required=[];
        for(let i=0; i<movie.length; i++){
            console.log(movie[i].actors)
            if(movie[i].actors.includes(req.params.id)){
                
                required.push(movie[i]);
            }
        }
        res.status(201).json({required});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
module.exports=router;