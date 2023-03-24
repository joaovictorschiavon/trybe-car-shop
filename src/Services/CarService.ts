import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(data);
    return this.createCarDomain(newCar);
  }

  public async getCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.createCarDomain(car);
  }
  
  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.update(id, car);

    return this.createCarDomain(newCar);
  }
}