const createAddress = require('../../domains/address-domain/create-address-domain');
const createAddressController = require('../../controllers/address-controller/address-controller');
const { should } = require('chai');
describe('Passando array', function () {
  describe('Endereço usuario', function () {
    it('Deve retornar true quando o endereco for criado', function () {
      should.equal(createAddressController("rua azul", "Casa de praia", "1"), true);
    });
  });
  
});