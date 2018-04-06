let expect = require('chai').expect;
let Service = require('./default.service');
let url = require('url');
var qs = require('querystring');

describe('My cases', function() {

    let api = 'http://localhost:5001';
    let server;
    let port = 5001;
    let service;

    beforeEach(function(done) {
        service = new Service();
        service.apiUrl = api;
        server = require('http').createServer((request, response)=> {            
            response.setHeader('Access-Control-Allow-Origin', '*');
            if (request.url == '/api/cases' && request.method == 'GET') {                
                response.statusCode = 200;
                response.write(JSON.stringify({any:'field'}));
                response.end(); 
            }
            else {
                response.statusCode = 200;
                response.write('ko');
                response.end(); 
            }
        }).listen(port, done);            
    });
    afterEach(function() {
        server.close();
    });

    it('uses a rest service', function(done) {                        
        service.getMyCases({}, function(data) {
            expect(data).to.deep.equal({any:'field'});
            done();
        });     
    });
});