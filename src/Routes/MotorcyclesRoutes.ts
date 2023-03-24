import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcyclesRoutes = Router();
const PATH_ID = '/motorcycles/:id';

MotorcyclesRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);
MotorcyclesRoutes.get(
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
MotorcyclesRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
MotorcyclesRoutes.put(
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);
MotorcyclesRoutes.delete(
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).deleteMotorcycle(),
);

export default MotorcyclesRoutes;