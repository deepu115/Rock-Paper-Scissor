import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../App.js';
import chai from 'chai';


chai.use(chaiHttp);

describe('Integration tests for Rock-Paper-Scissors game', () => {
    beforeEach(() => {
        app.locals = {};  // or set to some default state if necessary
    });
    it('should load the home page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Rock Paper Scissors');
                done();
            });
    });
    it('should redirect to single player mode when selected', (done) => {
        chai.request(app)
            .post('/selectMode')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ mode: 'single' })  // This sends the mode as single
            .end((err, res) => {
                expect(res).to.redirectTo(/\/singlePlayer$/);
                done();
            });
    });

    it('should redirect to multiplayer mode when selected', (done) => {
        chai.request(app)
            .post('/selectMode')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ mode: 'multi' })
            .end((err, res) => {
                expect(res).to.redirectTo(/\/multiPlayer$/);
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
    // it('should load the play page', (done) => {
    //     chai.request(app)
    //         .get('/play')
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             expect(res.text).to.include('Choose your move:');
    //             done();
    //         });
    // });
    // it('should handle invalid game choices', (done) => {
    //     chai.request(app)
    //         .post('/result')
    //         .send({ choice: 'invalid_choice' })
    //         .end((err, res) => {
    //             expect(res).to.have.status(500);
    //             done();
    //         });
    // });

});
