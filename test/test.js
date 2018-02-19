const assert = require('assert');
//const server = require("../index.js");
/*let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();*/
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

describe('GET /user', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /user', function(done) {
    request(app)
     
      .post('/user')
      .field('name', 'Jose')
      .field('lastName', 'Garcia')
      .field('dni', '666666')
      .expect(200,done);
  });
});

/*const assert = require('assert');
const server = require("../index.js");
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                res.should.have.status(200);
          
              done();
            });
      });
      it('it should POST the users', (done) => {
        let datos = {
          name:" Jose",
          lasName: "Garcia",
          dni:"66666666"
        }
        chai.request(server)
        .post('/user')
        .send(datos)
        .end((err,res) =>{
            res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
        });     
      });
  });





.send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
*/