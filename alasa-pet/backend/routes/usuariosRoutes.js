import express from 'express';
import {
    prueba,
    registrar,
    confirmar

} from '../controllers/usuariosController.js';

const router = express.Router();




//CRUD
router.get('/prueba',prueba);
router.post('/',registrar);
router.get('/confirmar/:token',confirmar);



export default router;