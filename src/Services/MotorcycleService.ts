import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(data);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  // public async getCars() {
  //   const carODM = new CarODM();
  //   const cars = await carODM.getCars();
  //   return cars.map((car) => this.createCarDomain(car));
  // }

  // public async getCarById(id: string) {
  //   const carODM = new CarODM();
  //   const car = await carODM.getCarById(id);
  //   return this.createCarDomain(car);
  // }
  
  // public async updateCar(id: string, car: ICar) {
  //   const carODM = new CarODM();

  //   const newCar = await carODM.updateCar(id, car);

  //   return this.createCarDomain(newCar);
  // }
}