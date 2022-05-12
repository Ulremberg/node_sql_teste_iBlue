const chai = require("chai");
const chaiHttp = require("chai-http");
const should  = require("chai");
const dotenv = require("dotenv");
const app = require("./index")
dotenv.config();


chai.use(chaiHttp);

describe("Criando usuario", () => {
  it("Deve criar um usuario", (done) => {
    var user = {
      name: "Manuela Gonçalves",
      birth_Date: "1900-01-01",
    };

    chai
      .request("localhost:" + process.env.PORT)
      .post("/user")
      .type("json")
      .send(user)
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
