import { 
  Model,
  Schema,
  model, 
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import IdInvalidError from '../Erros/IdInvalidError';

export default class CarDOm {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async update(id: string, obj: Partial<ICar>):
  Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new IdInvalidError('Invalid Mongo id');

    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );    
  }
}