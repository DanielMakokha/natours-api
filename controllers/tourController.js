const Tour=require('./../models/tourModel')



exports.getAllTours=(req,res) =>{
    res.status(200).json({
        status:'success',
        // result:tours.length,
        // data: {
        //     tours: tours
        // }
    })
}
exports.getTour=(req,res) =>{
    console.log(req.params);
    const id=req.params.id * 1;
    
    // const tour= tours.find(el => el.id === id)
    // res.status(200).json({
    //     status:'success',
    //     data: {
    //         tour
    //     }
    // });
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

exports.updateTour=(req,res) =>{  
    
    res.status(200).json({
        status:'success',
        data:{
            tour:'<Updated tour....>'
        }
    })
}
exports.deleteTour=(req,res) =>{
     
    
    res.status(204).json({
        status:'success',
        data:null
    })
}