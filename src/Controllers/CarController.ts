import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async registerCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getCars();
      return this.res.status(200).json(cars);
    } catch (err) {
      this.next(err);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    // if (id.length !== 24 || !id) {
    //   return this.res.status(422).json({ message: INVALID_ID });
    // }    

    try {
      const car = await this.service.getCarById(id);

      // if (!car) return this.res.status(404).json({ message: CAR_NOT_FOUND });

      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  public async updateCar() {
    try {
      const { id } = this.req.params;

      // if (id.length !== 24) return this.res.status(422).json({ message: INVALID_ID });  
        
      const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;

      const car: ICar = { model, year, color, status, buyValue, doorsQty, seatsQty };

      const newCar = await this.service.updateCar(id, car);

      // if (!newCar) return this.res.status(404).json({ message: CAR_NOT_FOUND });

      return this.res.status(200).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async deleteCar() {
    try {
      const { id } = this.req.params;

      // if (id.length !== 24) return this.res.status(422).json({ message: INVALID_ID });

      /* const deletedCar =  */await this.service.deleteCar(id);

      // if (!deletedCar) return this.res.status(404).json({ message: CAR_NOT_FOUND });

      return this.res.status(204).json({});
    } catch (err) {
      this.next(err);
    }
  }
}