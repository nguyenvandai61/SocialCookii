process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../server');
//Our parent block
describe('TEST API COMMENT', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    describe('#Create a comment', () => {
        it('it creates a comment', (done) => {
            let body = {
                content: "Ngon qua",
                createdAt: "2020-11-08T01:11:18.965Z"
            }
            chai.request(app)
                .post('/api/comment')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('content').eql(body.content);
                    (res).body.should.have.property('createdAt').eql(body.createdAt);
                    done();
                });
        });
    });
    // describe("Update comment", () => {
    //     it('it updates a comment', (done) => {
    //         let body = {
    //             content: "Ngon ghe",
    //             createdAt: "2020-11-08T01:11:18.965Z"
    //         }
            
    //         chai.request(app)
    //             .put('/api/comment')
    //             .send(body)
    //             .end((err, res) => {
    //                 (res).should.have.status(200);
    //                 done();
    //             });
    //     });
    // })
});