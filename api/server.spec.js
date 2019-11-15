const request  = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');

it('should set db environment to testing', function() {
  expect(process.env.DB_ENV).toBe('testing');
})

describe('server', function(){
  describe('GET /', function(){
    it(`should return 'server is up and running `, function(){
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      })
    })
  })
})

describe('server', function(){
  describe('GET /', function(){
      it('should return all users', function(){
          return request(server)
          .get('/')
          .then(res=>{expect(res.status).toBe(200)})
      })
  })
})


describe('server', function(){
  describe('POST /', function(){
    it(`should return text formatted response `, function(){
      return request(server)
      .post('/')
      .then(res => {
        expect(res.type).toMatch(/text/i);
      })
    })
  })
})

describe('add user', () => {
  it('inserts a user into the db', async () => {
    let user;
    user = await db('users');
    expect(user).toHaveLength(2);
    await user.insert({ 
      name: "Paul",
      img: "password"
     })
    user = await db('users');
    expect(smurf).toHaveLength(2);
  })
})





