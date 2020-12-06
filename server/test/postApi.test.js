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
                createdAt : Date.now(),
                deletedAt: "",
                editedAt: "",
                thumbnails: [
                    {
                        name: "base-image-"+Date.now(),
                        img: {
                            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
                            contentType: "image/png"
                        }
                    }
                ],  
                recipe: "2 kg nước",
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

            let respThumbnail = ['image/posts/'+ body.thumbnails[0].name+'.png'];
            chai.request(app)
                .post('/api/post')
                .send(body)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res).body.should.have.property('title').eql(body.title);
                    (res).body.should.have.property('description').eql(body.description);
                    (res).body.should.have.property('authorId').eql(body.authorId);
                    // (res).body.should.have.property('createdAt').eql(body.createdAt);
                    (res).body.should.have.property('deletedAt').eql(null);
                    (res).body.should.have.property('editedAt').eql(null);
                    (res).body.should.have.property('thumbnails').eql(respThumbnail);
                    (res).body.should.have.property('recipe').eql(body.recipe);
                    (res).body.should.have.property('comments').eql(body.comments);
                    (res).body.should.have.property('likeUserIds').eql(body.likeUserIds);
                    (res).body.should.have.property('state').eql(body.state);
                    // (res).body.should.have.property('hashtagIds').eql(body.hashtagIds);
                    done();
                });
        });
    });
});