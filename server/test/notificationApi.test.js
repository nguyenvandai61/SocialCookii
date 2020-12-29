process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../server');
//Our parent block
describe('Test API notification', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    describe('Create a notification', () => {
        it('it creates a notification', (done) => {
            let body = {
                url: "url.url",
                content:"notification",
                senderUserId:"5fa75587997be636b8f92cb3",
                receiveUserId:"5fa75587997be636b8f92cb3",
                isSeen:true,
                deleteAt:Date.now(),
                createAt:Date.now(),
            }
            chai.request(app)
                .post('/api/notification')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('url').eql(body.url);
                    (res).body.should.have.property('content').eql(body.content);
                    (res).body.should.have.property('senderUserId').eql(body.senderUserId);
                    (res).body.should.have.property('receiveUserId').eql(body.receiveUserId);
                    (res).body.should.have.property('isSeen').eql(body.isSeen);
                    // (res).body.should.have.property('deleteAt').eql(body.deleteAt);
                    // (res).body.should.have.property('createAt').eql(body.createAt);

                    done();
                });
        });
    });
});