import Car from '../Domains/Car';
import NotFoundError from '../Erros/NotFoundError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const CAR_NOT_FOUND = 'Car not found';

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

    if (!car) throw new NotFoundError(CAR_NOT_FOUND);

    return this.createCarDomain(car);
  }
  
  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.update(id, car);

    if (!newCar) throw new NotFoundError(CAR_NOT_FOUND);

    return this.createCarDomain(newCar);
  }

  public async deleteCar(id: string) {
    const carODM = new CarODM();

    const deletedCar = await carODM.delete(id);

    if (!deletedCar) throw new NotFoundError(CAR_NOT_FOUND);

    return this.createCarDomain(deletedCar);
  }
}