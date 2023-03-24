import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async registerMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  // public async getAll() {
  //   try {
  //     const cars = await this.service.getCars();
  //     return this.res.status(200).json(cars);
  //   } catch (err) {
  //     this.next(err);
  //   }
  // }

  // public async getById() {
  //   const { id } = this.req.params;

  //   if (id.length !== 24 || !id) {
  //     return this.res.status(422).json({ message: 'Invalid mongo id' });
  //   }    

  //   try {
  //     const car = await this.service.getCarById(id);

  //     if (!car) return this.res.status(404).json({ message: 'Car not found' });

  //     return this.res.status(200).json(car);
  //   } catch (err) {
  //     this.next(err);
  //   }
  // }

  // public async updateCar() {
  //   try {
  //     const { id } = this.req.params;

  //     if (id.length !== 24) return this.res.status(422).json({ message: 'Invalid mongo id' });  
        
  //     const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;

  //     const car: ICar = { model, year, color, status, buyValue, doorsQty, seatsQty };

  //     const newCar = await this.service.updateCar(id, car);

  //     if (!newCar) return this.res.status(404).json({ message: 'Car not found' });

  //     return this.res.status(200).json(newCar);
  //   } catch (err) {
  //     this.next(err);
  //   }
  // }
}