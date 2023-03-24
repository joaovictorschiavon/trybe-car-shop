import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post('/cars', (req, res, next) => new CarController(req, res, next).registerCar());
carRoutes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());
carRoutes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
carRoutes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default carRoutes;