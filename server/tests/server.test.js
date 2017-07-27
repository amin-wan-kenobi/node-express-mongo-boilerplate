const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');

describe('GET root path => /', () => {
    it('should return Happy Coding!!!', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.text).toExist();
                expect(res.text).toBe('Happy Coding!!!');
            })
            .end((err) => {
                if(err){
                    return done(err);
                }
                done();
            });
    });
});