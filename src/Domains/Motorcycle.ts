import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(obj: IMotorcycle) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(value: string) {
    this.category = value;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}