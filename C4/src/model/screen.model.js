const mongoose=require('mongoose');
const screenSchema=new mongoose.Schema({
name:{type:String,required:true},
theatre:{type:mongoose.Schema.Types.ObjectId, ref:"Theatre"}
},
{
    versionKey:false
});
const Screen=mongoose.model("Screen",screenSchema);
module.exports=Screen;