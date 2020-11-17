process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../server');
//Our parent block
describe('Test API user', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    describe('#Create a user', () => {
        it('it creates a user', (done) => {
            let body = {
                username: "dai",
                password: "123",
                role: "admin"
            }
            chai.request(app)
                .post('/api/user')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('username').eql(body.username);
                    (res).body.should.have.property('password').eql(body.password);
                    (res).body.should.have.property('role').eql(body.role);
                    done();
                });
        });
    });
    describe('#Get all users', () => {
        it('it gets all users', (done) => {
            chai.request(app)
                .get('/api/user')
                .end((err, res) => {
                    (res).should.have.status(200);
                    done();
                });
        });
    });
    describe('#Login a user', () => {
        it('it logins a user', (done) => {
            let body = {
                username: "dai",
                password: "123",
            }
            chai.request(app)
                .post('/api/user/login')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    done();
                });
        });
    });
});