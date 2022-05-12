const chai = require("chai");
const chaiHttp = require("chai-http");
const { should } = require("chai");
const dotenv = require("dotenv");
const app = require("./index")
dotenv.config();

chai.use(chaiHttp);

describe("Teste criar endereco", () => {
  it("Deve criar um endereco", (done) => {
    var address = {
      address: "Rua da moeda",
      address_status: "Sinuca do biu",
      userId: "2",
    };

    chai
      .request("localhost:" + process.env.PORT)
      .post("/address")
      .type("json")
      .send(address)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        error.should.to.be.null;
        response.should.to.have.status(201);

        done();
      });
  });
});
