import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../App.js';
import chai from 'chai';


chai.use(chaiHttp);

describe('Integration tests for Rock-Paper-Scissors game', () => {
    it('should load the home page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Enter your name:');
                done();
            });
    });

    it('should redirect to /play after setting name', (done) => {
        chai.request(app)
            .post('/setName')
            .send({ name: 'John' })
            .redirects(0)
            .end((err, res) => {
                expect(res).to.have.status(302);
                expect(res).to.have.header('location', '/play');
                done();
            });
    });
    it('should load the play page', (done) => {
        chai.request(app)
            .get('/play')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Choose your move:');
                done();
            });
    });



});

