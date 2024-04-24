const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Pruebas en el servidor', () => {
    it('debería obtener una respuesta del servidor', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('Hola Mundo!');
                done();
            });
    });
});
