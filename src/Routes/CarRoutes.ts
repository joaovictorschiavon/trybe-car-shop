import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post('/cars', (req, res, next) => new CarController(req, res, next).registerCar());
CarRoutes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());
CarRoutes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
CarRoutes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default CarRoutes;