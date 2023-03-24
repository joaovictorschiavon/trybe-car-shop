import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    super(obj);
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }

  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}