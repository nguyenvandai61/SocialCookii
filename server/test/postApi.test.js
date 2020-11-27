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
    describe('#Create a post', () => {
        it('it creates a post', (done) => {
            let body = {
                title : "Mi xao",
                description: "Nguyen lieu: Mi + Trung ga",
                authorId :"5fa7edd8869c07126058a867",
                createdAt : "2020-11-08T01:11:18.965Z",
                deletedAt: "",
                editedAt: "",
                thumbnails: [
                    "/images/anh1.png",
                    "/images/anh1.png"
                ],
                album:[
                    {
                        url: "/images/anh1.png",
                        caption: "cong thuc"
                    },
                    {
                        url: "/images/anh2.png",
                        caption: "ket qua"
                    }
                ],
                recipe: "2 kg nước",
                videos:[
                    {
                        url: "/images/video.mp3",
                        caption: "cach lam"
                    }
                ],
                comments:[
                    "5fa7f3aa108cb725f035f21a",
                    "5fa7efe5869c07126058a868"
                ],
                likeUserIds:[
                    "5fa7f3aa108cb725f035f21a",
                    "5fa7efe5869c07126058a868"
                ],
                state:"Da dang",
                hashtagIds:"5fa75587997be636b8f92cb3"

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
                    (res).body.should.have.property('deletedAt').eql(null);
                    (res).body.should.have.property('editedAt').eql(null);
                    (res).body.should.have.property('thumbnails').eql(body.thumbnails);
                    (res).body.should.have.property('recipe').eql(body.recipe);
                    
                    (res).body.should.have.property('album').eql(body.album);
                    (res).body.should.have.property('videos').eql(body.videos);
                    (res).body.should.have.property('comments').eql(body.comments);
                    (res).body.should.have.property('likeUserIds').eql(body.likeUserIds);
                    (res).body.should.have.property('state').eql(body.state);
                    // (res).body.should.have.property('hashtagIds').eql(body.hashtagIds);
                    done();
                });
        });
    });
});