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

  public async getMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(id);
    return this.createMotorcycleDomain(motorcycle);
  }
  
  public async updateMotorcycle(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const newMotorcycle = await motorcycleODM.update(id, motorcycle);

    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async deleteMotorcycle(id: string) {
    const motorcycleODM = new MotorcycleODM();

    const deletedMotorcycle = await motorcycleODM.delete(id);

    return this.createMotorcycleDomain(deletedMotorcycle);
  }
}