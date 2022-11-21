import producto from "../models/producto.js";
import fs from 'fs-extra';
import{
    uploadImage,
    deleteImage
}from '../helper/cloudinary.js';




const prueba = (req,res) => {
    res.send({
        msg:"en esta ruta gestionaremos todas las peticiones al modelo de productos"
    });
};
    

//Post nuevo productos
const createProductos = async (req,res) =>{
    try{
        const {nombre, descripcion, precio, stock} = req.body;
        let image;
    
    if(req.files.image){
        const result = await uploadImage(req.files.image.tempFilePath);
        await fs.remove(req.files.image.tempFilePath);
        image= {
            url: result.secure_url,
            public_id: result.public_id
        };
        
        console.log(result);
    }

    const Newproducto = new producto ({nombre, descripcion, precio, image, stock});
    await Newproducto.save();
    return res.json(Newproducto);
    
    } catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message});
    }

};

//Get productos
const getProductos = async (req,res) =>{

    try{

        const productos = await producto.find();
        res.send(productos);
    } catch (error){
        console.log(error.message);
        return res.status(500).json({msg: error.message});
    }

};

//Update(put)
const updateProductos = async (req, res) => {
    const {id, nombre, description, precio, stock} = req.body;
    try {
        const updateProducto = await producto.findById(id);

        updateProducto.nombre = nombre;
        updateProducto.description = description;
        updateProducto.precio = precio;
        updateProducto.stock = stock;

        if(req.files.image){
            await deleteImage(updateProducto.image.public_id);
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);

            updateProducto.image = {
                url: result.secure_url,
                public_id: result.public_id
            };

            await updateProducto.save();
            return res.status(204).json(updateProducto);
        }
    } catch (error) {
        console.log(error.message);
    }
};

//Delete
const deleteProductos = async (req,res) =>{

    try {

       const productRemove = await producto.findByIdAndDelete(req.params.id);
       if(!productRemove){

        const error = new Error("Token no valido");
        return res.sendStatus(404);
       
    }else{
        if(productRemove.image.public_id){
            await deleteImage(productRemove.image.public_id);
        }
        return res.sendStatus(204);
    }
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

//GET producto por id.
const getProducto = async (req,res) =>{
    try {
        const OneProduct = await producto.findById(req.params.id);
        if(!OneProduct){
            return res.sendStatus(404);
        }else{
            return res.json(OneProduct);
        }
        
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }

};



export{
        prueba,
        createProductos,
        getProductos,
        updateProductos,
        deleteProductos,
        getProducto

    } 