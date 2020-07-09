// const request = require('supertest');
// const app = require("./app.js")

// describe("first test", () => {
//     expect(true).toBe(true)
// })

// const mocha = require('mocha')
// const describe = mocha.describe
// const it = mocha.it
// const assert = require('chai').assert

// describe('#indexOf()', function() {
//   it('should return -1 when not present', function() {
//     assert.equal([1,2,3].indexOf(4), -1)
//   })
// })

var request = require('supertest');
const app = require('./app');

describe('loading express', function () {
  it('responds to /', function testSlash(done) {
  request(app)
    .get('/students')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});