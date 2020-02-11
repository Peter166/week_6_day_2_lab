const assert =require('assert')

const Room = require('../models/room.js')

describe('Room', function(){
  beforeEach(function(){
    room = new Room(10)
  });

  it('should have area', function(){
    const actual = room.area
    const expected = 10
    assert.strictEqual(actual, expected)

  });
  it('should start not painted', function(){
    const actual = room.painted
    const expected = false
    assert.strictEqual(actual, expected)
  });

  it('should be able to be painted', function(){
    room.paint()
    const actual = room.painted
    const expected = true
    assert.strictEqual(actual, expected)
  });
  
});
