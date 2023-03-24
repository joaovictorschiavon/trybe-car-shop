import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const ID_VALID = '641ddb5c7e3c9c94608b67da';
const ID_INVALID = '641ddb5c7e3c9c94608b67d';
const ID_NOT_FOUND = '641ddb5c7e3c9c94608b67de';

const inputMock: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const outputMock: Car = new Car({
  id: '641ddb5c7e3c9c94608b67da',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

const outputMocks: Car[] = [new Car({
  id: '641ddb5c7e3c9c94608b67da',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
})];

export {
  inputMock,
  outputMock,
  outputMocks,
  ID_VALID,
  ID_INVALID,
  ID_NOT_FOUND,
};