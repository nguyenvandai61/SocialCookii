process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../server');
//Our parent block
describe('Test API post', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    describe('Create a post', () => {
        it('it creates a post', (done) => {
            let body = {
                title: "50 món bánh ngon",
                description: "",
                authorId: "@phanvu",
                createdAt: "12/7/2020",

            }
            chai.request(app)
                .post('/api/post')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('title').eql(body.title);
                    (res).body.should.have.property('description').eql(body.description);
                    (res).body.should.have.property('authorId').eql(body.authorId);
                    (res).body.should.have.property('createdAt').eql(body.createdAt);
                    done();
                });
        });
    });
});