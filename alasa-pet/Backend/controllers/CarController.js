import CarModel from '../models/CarModel.js'


// mostrar todos los productos
export default getAllCar = async(req,res) =>{
    try{
        const cars = await CarModel.find()
        res.status(200).json(cars)

    }catch(err){
        res.json({message: err.message})
    }
}


// mostrar un solo producto
export const getCar = async(req,res) =>{
    try{
        const id = req.params.id
        const car = await CarModel.findById({_id:id}).then((car)=>{
            res.status(200).json(car)
        })
    }catch(err){
        res.json({message: err.message})
    }
}

// Guardar un producto en el carrito de compras
export const createCar = async(req,res) =>{
    try{
        await CarModel.create(req.body)
        res.status(200).json({message: "Producto agregado al carrito de compras"})
    }catch(err){

    }
}

// Eliminar producto del carrito de compras
export const deleteCar = async(req,res) =>{
    try{
        const id = req.params.id
        await CarModel.deleteOne({_id:id}).then(res=>{console.log(res)})
        res.status(200).json({"message":"¡Producto eliminado con exito!"})
    }catch(err){
        res.json({message:err.message})
    }
}