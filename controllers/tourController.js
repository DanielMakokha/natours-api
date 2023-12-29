const Tour=require('./../models/tourModel')


exports.checkBody=(req,res,next) =>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'Missing name or price'
        })
    };
    next();
};

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

exports.createTour=(req,res) =>{
    // console.log(req.body);
    res.status(201).json({
        status:"success",
        // data:{
        //     tours:newTour
        // }
    })
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