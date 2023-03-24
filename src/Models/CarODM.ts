import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  // public async create(car: ICar): Promise<ICar> {
  //   return this.model.create({ ...car });
  // }

  // public async updateCar(_id: string, car: Partial<ICar>):
  // Promise<ICar | null> {
  //   return this.model.findByIdAndUpdate(
  //     { _id },
  //     { ...car } as UpdateQuery<ICar>,
  //     { new: true },
  //   );    
  // }

  // public async getCars() {
  //   return this.model.find();
  // }

  // public async getCarById(id: string) {
  //   return this.model.findById(id);
  // }
}