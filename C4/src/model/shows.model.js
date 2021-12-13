const mongoose=require('mongoose');
const showsSchema=new mongoose.Schema({
timing:{type:String,required:true},
movie:{type:mongoose.Schema.Types.ObjectId, ref:"Movie"},
total_seats:{type:Number,required:true},
screen:{type:mongoose.Schema.Types.ObjectId, ref:"Screen"}
},
{
    versionKey:false
});
const Shows=mongoose.model("Shows",showsSchema);
module.exports=Shows;