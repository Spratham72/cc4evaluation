const connect=require('./config/db');
const upload=require('./utils/profilePhoto');
const express=require('express');
const {register, login}=require('./controller/auth.controller');
const movieController=require('./controller/movie.controller');
const theatreController=require('./controller/theatre.controller');
const screenController=require('./controller/screen.controller');
const showController=require('./controller/show.controller');
const seatController=require('./controller/seat.controller');
const app=express();
app.use(express.json());
app.post('/user',upload.single('profile'),register);
app.post('/login',login);
app.use('/movie',movieController);
app.use('/theatre',theatreController);
app.use('/screen',screenController);
app.use('/show',showController);
app.use('/seat',seatController);
const start=async()=>{
await connect();
app.listen(1234,()=>{
    console.log("Server is live on port 1234")
})
}
module.exports=start;