import express from "express";
import {
    prueba,
    createProductos,
    getProductos,
    getProducto,
    updateProductos,
    deleteProductos    

} from '../controllers/productosController.js';




const router = express.Router();

//CRUD
router.get('/prueba',prueba);
router.get('/get',getProductos);
router.get('/get/:id',getProducto);
router.post('/create',createProductos);
router.put('/update/:id',updateProductos);
router.delete('/delete/:id',deleteProductos);


export default router;