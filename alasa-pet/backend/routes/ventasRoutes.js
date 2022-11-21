import express from 'express';
import { 
    prueba,
    createVentas,
    getVentas,
    getVenta,
    updateVentas,
    deleteVentas
    
} from '../controllers/ventasController.js';

const router = express.Router();

//CRUD
router.get('/prueba', prueba);

router.post('/create', createVentas);
router.get('/get', getVentas);
router.get('/get/:id', getVenta);
router.put('/update/:id', updateVentas);
router.delete('/delete/:id', deleteVentas);

export default router;