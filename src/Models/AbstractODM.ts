import { isValidObjectId, model, Model, models, Schema, UpdateQuery } from 'mongoose';
import IdInvalidError from '../Erros/IdInvalidError';

const INVALID_ID = 'Invalid mongo id';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new IdInvalidError(INVALID_ID);
    
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new IdInvalidError(INVALID_ID);
    
    return this.model.findById(_id);
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new IdInvalidError(INVALID_ID);
    
    return this.model.findByIdAndDelete(_id);
  }
}

export default AbstractODM;