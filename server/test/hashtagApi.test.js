process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../server');
//Our parent block
describe('Test API hashtag', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    describe('#Create a hashtag', () => {
        it('it creates a hashtag', (done) => {
            let body = {
                hashtagName: "pizza"
            }
            chai.request(app)
                .post('/api/hashtag')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('hashtagName').eql(body.hashtagName);
                    done();
                });
        });
    });
});