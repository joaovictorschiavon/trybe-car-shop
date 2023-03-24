import sinon from 'sinon';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import {
  inputMock,
  outputMock,
  outputMocks,
  ID_VALID,
  ID_INVALID,
  ID_NOT_FOUND,
} from '../Mocks/Car.mocks';

describe('Teste de service de Car', () => {
  afterEach(function () { sinon.restore(); });

  describe('Car register', function () {
    it('Should register one car with sucess', async function () {
      // Given
      sinon.stub(Model, 'create').resolves(outputMock);

      // When
      const service = new CarService();
      const result = await service.create(inputMock);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
  describe('Return all cars', function () {
    it('Should return all cars', async function () {
      // Given
      sinon.stub(Model, 'find').resolves(outputMocks);

      // When
      const service = new CarService();
      const result = await service.getCars();

      // Then
      expect(result).to.be.deep.equal(outputMocks);
      expect(result.length).to.be.equal(1);
    });
  });
  describe('Return one car from specific ID', function () {
    it('Should return one car from specific ID', async function () {
      // Given
      sinon.stub(Model, 'findById').resolves(outputMock);
      
      // When
      const service = new CarService();
      const result = await service.getCarById(ID_VALID);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
    it('Should return a error 422 with message of invalid mongo id', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        const service = new CarService();
        await service.getCarById(ID_INVALID);
      } catch (err) {
        expect((err as Error).message).to.equal('Invalid mongo id');
      }
    });
    it('Should return a error 404 with message of car not found', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        const service = new CarService();
        await service.getCarById(ID_NOT_FOUND);
      } catch (err) {
        expect((err as Error).message).to.equal('Car not found');
      }
    });
  });
  describe('Update informations of car of specific id', function () {
    it('Should update one car', async function () {
      // Given
      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMock);

      // When
      const service = new CarService();
      const result = await service.updateCar(ID_VALID, inputMock);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
  describe('Delete car of specific id', function () {
    it('Should delete car', async function () {
      // Given
      sinon.stub(Model, 'findByIdAndDelete').resolves(outputMock);

      // When
      const service = new CarService();
      const result = await service.deleteCar(ID_VALID);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
});