const assert =require('assert')
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')
const PaintCan = require('../models/paint_can.js')



describe('Decorator', function(){
  beforeEach(function(){
    decorator = new Decorator()
    can1 = new PaintCan(5)
    room1 = new Room(5)

  });


  it('should have a empty paintStock', function() {
    const actual = decorator.paintStock
    const expected = []
    assert.deepStrictEqual(actual, expected)
  });




  it('should be able to add a can', function() {
    decorator.addCan(can1)
    const actual = decorator.paintStock.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to calculate total litres of paint in stock', function(){
    decorator.addCan(can1)
    decorator.addCan(can1)
    decorator.addCan(can1)
    const actual = decorator.totalLitres()
    const expected = 15
    assert.strictEqual(actual, expected)
  });



  it('should calculate if there is enough paint to paint the room', function(){
    decorator.addCan(can1)
    decorator.addCan(can1)
    const actual = decorator.ifEnoughPaint(room1)
    const expected = true
    assert.strictEqual(actual, expected)
  });

  it('should paint the room id enough paint in stock', function(){
    decorator.addCan(can1)
    decorator.addCan(can1)
    decorator.addCan(can1)
    decorator.paintRoom(room1)
    const actual = room1.painted
    const expected = true
    assert.strictEqual(actual, expected)
  });

});
