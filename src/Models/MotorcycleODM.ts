import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  // public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
  //   return this.model.create({ ...motorcycle });
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