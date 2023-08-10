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
                expect(res.text).to.include('Rock Paper Scissors');
                done();
            });
    });
    it('should redirect to single player mode when selected', (done) => {
        chai.request(app)
            .post('/selectMode')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ mode: 'single' })
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
    it('should request name for single player mode', (done) => {
        chai.request(app)
            .get('/singlePlayer')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('input type="text" id="name" name="name"');
                done();
            });
    });
    it('should request names for both players in multiplayer mode', (done) => {
        chai.request(app)
            .get('/multiPlayer')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('input type="text" id="player1Name" name="player1Name"');
                expect(res.text).to.include('input type="text" id="player2Name" name="player2Name"');
                done();
            });
    });
    it('should redirect to /play after setting name', (done) => {
        chai.request(app)
            .post('/setName')
            .send({ name: 'ED' })
            .redirects(0)
            .end((err, res) => {
                expect(res).to.have.status(302);
                expect(res).to.have.header('location', '/play');
                done();
            });
    });
    it('should redirect to /multiPlay after setting names', (done) => {
        chai.request(app)
            .post('/setMultiNames')
            .send({ player1Name: 'Tom', player2Name: 'Jerry' })
            .redirects(0)
            .end((err, res) => {
                expect(res).to.have.status(302);
                expect(res).to.have.header('location', '/multiPlay/player1Choice');
                done();
            });
    });
    it('should load the play page', (done) => {
        chai.request(app)
            .get('/play')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Choose Your Move:');
                done();
            });
    });
    it('should allow a single player to select a move', (done) => {
        chai.request(app)
            .post('/play')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ choice: 'rock' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res).to.redirectTo(/\/result$/);
                done();
            });
    });
    it('should allow Player 2 to select a move after Player 1', (done) => {
        chai.request(app)
            .post('/multiPlay/player1Choice')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ choice: 'rock' })
            .end((err, res) => {
                chai.request(app)
                    .post('/multiPlay/player2Choice')
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .send({ choice: 'paper' })
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res).to.redirectTo(/\/multiResult$/);
                        done();
                    });
            });
    });

});

describe('Should return result', () => {
    it('should display the result for a single player game', function (done) {
        chai.request(app)
            .post('/singlePlayer')
            .send({ name: 'Player' })
            .end((err, res) => {
                chai.request(app)
                    .post('/play')
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .send({ choice: 'rock' })
                    .end((err, res) => {
                        chai.request(app)
                            .get('/result')
                            .end((err, res) => {
                                expect(res.text.includes('You win!') || res.text.includes('You lose!') || res.text.includes("It's a draw!"));
                                done();
                            });
                    });
            });
    });
    it('should display the result for a multiplayer game', (done) => {
        chai.request(app)
            .post('/multiPlayer')
            .send({ player1Name: 'Barbie', player2Name: 'Ken' })
            .end((err, res) => {
                chai.request(app)
                    .post('/multiPlay/player1Choice')
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .send({ choice: 'rock' })
                    .end((err, res) => {
                        chai.request(app)
                            .post('/multiPlay/player2Choice')
                            .set('Content-Type', 'application/x-www-form-urlencoded')
                            .send({ choice: 'scissors' })
                            .end((err, res) => {
                                chai.request(app)
                                    .get('/multiResult')
                                    .end((err, res) => {
                                        expect(res.text.includes('Barbie wins!'));
                                        done();
                                    });
                            });
                    });
            });
    });
});
