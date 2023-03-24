import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcyclesRoutes = Router();

MotorcyclesRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);
// CarRoutes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());
// CarRoutes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
// CarRoutes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default MotorcyclesRoutes;