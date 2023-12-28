// 4)START SERVER
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path: './config.env'});

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose
// .connect(process.env.DATABASE_LOCAL,{//lOCAL DATABASE

//HOSTED DATABASE
.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(con => {
   console.log(con.connections);
   console.log('DB connected successfully'); 
})

const tourSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A tour must have a name'],
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,'A tour must have a price']
    }
});

const Tour=mongoose.model('Tour',tourSchema);

const testTour=new Tour({
    name:'The Park Camper',
    price:497
    
})
testTour.save().then(doc =>{
    console.log(doc);
}).catch(err =>{
    console.log('ERROR',err);
})

const app=require('./app');

console.log(app.get('env'));
// console.log(process.env);


const port =process.env.PORT || 3000;
app.listen(port,() => {
console.log(`App running on port ${port}....`);
})