const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;
const url = `http://localhost:8028/`;
const request = require('supertest')(url);
const should = chai.should();
const assert = chai.assert;
const postQueryAll = require('./get-post-all');
const postQueryId = require('./get-post-id');


describe('GraphQL', () => {
    it('Retorna post com  id = 1', (done) => {
        request.post('')
        .send({ query: postQueryAll})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.data.posts[0].should.have.property('postId');
            res.body.data.posts[0].should.have.property('title');  

            done();
        })
    })

    it('Retorna todos os posts', (done) => {
                request.post('')
                .send({ query: postQueryId })
                .expect(200)
                .end((err, res) => {
                   
                    done();
                })  
            })
});