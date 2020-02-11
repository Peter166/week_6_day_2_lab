const assert =require('assert')
const PaintCan = require('../models/paint_can.js')

describe('PaintCan', function(){
  beforeEach(function(){
    paintcan = new PaintCan(10);
  });

  it('should have a number of liters of paint', function(){
    const actual = paintcan.litres
    const expected = 10
    assert.strictEqual(actual, expected)
  });

  it('should be able to check if it is empty', function(){
  const actual = paintcan.checkEmpty()
  assert.strictEqual(actual, false)
  });


  it('should be able to empty it self', function(){
  paintcan.emptyItSelf()
  const actual = paintcan.checkEmpty()

  assert.strictEqual(actual, true)
  });

});
