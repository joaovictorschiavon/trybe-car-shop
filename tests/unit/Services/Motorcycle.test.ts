import sinon from 'sinon';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  inputMock,
  outputMock,
  outputMocks,
  ID_VALID,
  ID_INVALID,
  ID_NOT_FOUND,
} from '../Mocks/Motorcycle.mocks';

describe('Teste de service de Motorcycle', () => {
  afterEach(function () { sinon.restore(); });

  describe('Motorcycle register', function () {
    it('Should register one motorcycle with sucess', async function () {
      // Given
      sinon.stub(Model, 'create').resolves(outputMock);

      // When
      const service = new MotorcycleService();
      const result = await service.create(inputMock);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
  describe('Return all motorcycles', function () {
    it('Should return all motorcycles', async function () {
      // Given
      sinon.stub(Model, 'find').resolves(outputMocks);

      // When
      const service = new MotorcycleService();
      const result = await service.getMotorcycles();

      // Then
      expect(result).to.be.deep.equal(outputMocks);
      expect(result.length).to.be.equal(1);
    });
  });
  describe('Return one motorcycle from specific ID', function () {
    it('Should return one  motorcycle from specific ID', async function () {
      // Given
      sinon.stub(Model, 'findById').resolves(outputMock);
      
      // When
      const service = new MotorcycleService();
      const result = await service.getMotorcycleById(ID_VALID);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
    it('Should return a error 422 with message of invalid mongo id', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        const service = new MotorcycleService();
        await service.getMotorcycleById(ID_INVALID);
      } catch (err) {
        expect((err as Error).message).to.equal('Invalid mongo id');
      }
    });
    it('Should return a error 404 with message of motorcycle not found', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        const service = new MotorcycleService();
        await service.getMotorcycleById(ID_NOT_FOUND);
      } catch (err) {
        expect((err as Error).message).to.equal('Motorcycle not found');
      }
    });
  });
  describe('Update informations of motorcycle of specific id', function () {
    it('Should update one motorcycle', async function () {
      // Given
      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMock);

      // When
      const service = new MotorcycleService();
      const result = await service.updateMotorcycle(ID_VALID, inputMock);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
  describe('Delete motorcycle of specific id', function () {
    it('Should delete motorcycle', async function () {
      // Given
      sinon.stub(Model, 'findByIdAndDelete').resolves(outputMock);

      // When
      const service = new MotorcycleService();
      const result = await service.deleteMotorcycle(ID_VALID);

      // Then
      expect(result).to.be.deep.equal(outputMock);
    });
  });
});