import { expect } from 'chai';
import Connection from '../../../src/Models/Connection';

describe('Teste de Connection', function () {
  it('Conexão estabelecida', async function () {
    let res = false;
    try {
      await Connection();
      res = true;
    } catch (err) {
      res = false;
    }
    expect(res).to.be.equal(true);
  });
});