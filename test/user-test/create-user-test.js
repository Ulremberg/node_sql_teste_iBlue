const createUser = require('../../domains/user-domain/create-user-domain');
const createUserController = require('../../controllers/user-controller/user-controller');
const { should } = require('chai');
describe('Passando array', function () {
  describe('Criar usuario', function () {
    it('Deve retornar true quando o usuário for criado', function () {
      should.equal(createUserController("user123", "user123", "user123@gmail.com"), true);
    });
  });

  describe('Email com at.@', function () {
    it('Deve retornar false quando não houver @ no email', function () {
        should.equal(createUserController("user123", "user123", "user123"));
    });
  });

  describe('Senha com menos de caracteres', function () {
    it('Deverá retornar falso por a senha ter menos 6 caracteres', function () {
        should.equal(createUserController("user123", "user", "user123@gmail.com"), 'Password must be at least 7 characters');
    });
  });

  describe('Sem parametro', function () {
    it('Deve retornar que a função deve ter três parâmetros', function () {
        should.equal(createUserController(), 'A função deve ter três parâmetros');
    });
  });  

});