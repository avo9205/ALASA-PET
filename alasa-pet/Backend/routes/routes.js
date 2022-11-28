import express from 'express';
import { getAllProduct,createProduct,updateProduct,deleteProduct, getProduct } from '../controllers/ProductController.js'

const router = express.Router();

// enrrutamiento
//mostrar todos los productos
router.get('/', getAllProduct)
// mostrar un solo producto por id
router.get('/:id', getProduct)
// crear un producto
router.post('/',createProduct)
// actualizar producto
router.put('/:id', updateProduct)
// borrar un producto
router.delete('/:id', deleteProduct)

export default router