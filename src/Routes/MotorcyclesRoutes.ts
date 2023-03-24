import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcyclesRoutes = Router();

MotorcyclesRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);
MotorcyclesRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
MotorcyclesRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
MotorcyclesRoutes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);

export default MotorcyclesRoutes;