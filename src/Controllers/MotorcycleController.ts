import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

const INVALID_ID = 'Invalid mongo id';
const MOTROCYCLE_NOT_FOUND = 'Motorcycle not found';

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

  public async getAll() {
    try {
      const motorcycles = await this.service.getMotorcycles();
      return this.res.status(200).json(motorcycles);
    } catch (err) {
      this.next(err);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    if (id.length !== 24 || !id) {
      return this.res.status(422).json({ message: INVALID_ID });
    }    

    try {
      const motorcycle = await this.service.getMotorcycleById(id);

      if (!motorcycle) return this.res.status(404).json({ message: MOTROCYCLE_NOT_FOUND });

      return this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async updateMotorcycle() {
    try {
      const { id } = this.req.params;

      if (id.length !== 24) return this.res.status(422).json({ message: INVALID_ID });  
        
      const { model, year, color, status, buyValue, category, engineCapacity } = this.req.body;

      const motorcycle:
      IMotorcycle = { model, year, color, status, buyValue, category, engineCapacity };

      const newMotorcycle = await this.service.updateMotorcycle(id, motorcycle);

      if (!newMotorcycle) return this.res.status(404).json({ message: MOTROCYCLE_NOT_FOUND });

      return this.res.status(200).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async deleteMotorcycle() {
    try {
      const { id } = this.req.params;

      if (id.length !== 24) return this.res.status(422).json({ message: INVALID_ID });

      const deletedMotorcycle = await this.service.deleteMotorcycle(id);

      if (!deletedMotorcycle) return this.res.status(404).json({ message: MOTROCYCLE_NOT_FOUND });

      return this.res.status(204).json({});
    } catch (err) {
      this.next(err);
    }
  }
}