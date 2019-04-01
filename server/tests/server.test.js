const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');

describe('GET root path => /', () => {
    it('should return an object!!!', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res).toBeTruthy()
                expect(res.body.status).toBe(200)
                expect(res.body.message).toBe('Happy Coding')
                expect(res.body.passedQueries).toEqual({})
            })
            .end((err) => {
                if(err){
                    return done(err);
                }
                done();
            });
    });
    it('should receives queriy parameters', (done) => {
        request(app)
            .get('/?q1=queryone&q2=querytwo')
            .expect(200)
            .expect((res) => {
                expect(res).toBeTruthy()
                expect(res.body.status).toBe(200)
                expect(res.body.message).toBe('Happy Coding')
                expect(res.body.passedQueries).toBeTruthy()
                expect(res.body.passedQueries.q1).toBe('queryone')
                expect(res.body.passedQueries.q2).toBe('querytwo')
            })
            .end((err) => {
                if(err){
                    return done(err);
                }
                done();
            });
    });
});