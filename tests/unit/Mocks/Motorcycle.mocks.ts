import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const ID_VALID = '641ddc3e7e3c9c94608b67dd';
const ID_INVALID = '641ddc3e7e3c9c94608b67d';
const ID_NOT_FOUND = '641ddc3e7e3c9c94608b67de';
const nameMoto = 'Honda Cb 600f Hornet';

const inputMock: IMotorcycle = {
  model: nameMoto,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const outputMock: Motorcycle = new Motorcycle({
  id: '641ddc3e7e3c9c94608b67dd',
  model: nameMoto,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
});

const outputMocks: Motorcycle[] = [new Motorcycle({
  id: '641ddc3e7e3c9c94608b67dd',
  model: nameMoto,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
})];

export {
  inputMock,
  outputMock,
  outputMocks,
  ID_VALID,
  ID_INVALID,
  ID_NOT_FOUND,
};