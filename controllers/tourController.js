const Tour=require('./../models/tourModel')



exports.getAllTours= async(req,res) =>{
   try {
    const tours=await Tour.find();
    res.status(200).json({
        status:'success',
        result:tours.length,
        data: {
            tours: tours
        }
});
    
   } catch (err) {
    res.status(404).json({
        status:'fail',
        message:err
    });
   }
    
exports.getTour=async (req,res) =>{
    try {
        await Tour.findById(req.params.id);
        res.status(200).json({
            status:'success',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err
    })
    
    
}

exports.createTour= async (req,res) =>{
    
    try{
    // const newTour= new Tour({});
    // newTour.save();

     const newTour=await Tour.create(req.body);
        res.status(201).json({
        status:"success",
        data:{
           tours:newTour
       }
   })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:'Invalid data sent'
        })
    }
    
};

exports.updateTour= async (req,res) =>{  
    
    try {
        const tour=Tour.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:'success',
            data:{
                tour
            }
        })  
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:'Invalid data sent'
        }) 
    }
    
}

exports.deleteTour= async (req,res) =>{
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status:'success',
            data:null
        });  
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:'Invalid data sent'
        })
    }
   
};