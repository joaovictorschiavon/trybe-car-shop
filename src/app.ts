import express from 'express';
import CarRoutes from './Routes/CarRoutes';
import MotorcyclesRoutes from './Routes/MotorcyclesRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(MotorcyclesRoutes);
app.use(ErrorHandler.handle);

export default app;
