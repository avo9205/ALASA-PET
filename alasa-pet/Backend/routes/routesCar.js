import express from 'express';
import {getAllCar,getCar,createCar,deleteCar} from '../controllers/CarController.js'

const router = express.Router();

router.get('/', getAllCar)
router.get('/:id', getCar)
router.get('/', createCar)
router.get('/', deleteCar)

export default router