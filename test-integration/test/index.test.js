const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;
const url = `http://localhost:8028/`;
const request = require('supertest')(url);
const should = chai.should();
const assert = chai.assert;


describe('GraphQL', () => {
    it('Retorna post com  id = 1', (done) => {
        request.post('')
        .send({ query:  `
        query {
            posts(postId:1){
             postId,
             title,
             comments{
               commentId,
               text,
               author{
                 name
               }
             }
        }
    }
        ` })
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
                .send({ query: `query {
                    posts{
                     postId,
                     title
                 
                   }
                 }` })
                .expect(200)
                .end((err, res) => {
                   
                    done();
                })  
            })
});



function readQuery (path)
{
 fs.readFile(process.cwd() + path, function(err, data)
    {
        console.log(data.toString())
        return data.toString();
           
    });
};
readQuery("/test/get-post-id.graphql")