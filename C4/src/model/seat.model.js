const mongoose=require('mongoose');
const seatSchema=new mongoose.Schema({
show:{type:mongoose.Schema.Types.ObjectId, ref:"Shows"}
},
{
    versionKey:false
});
const Seat=mongoose.model("Seat",seatSchema);
module.exports=Seat;