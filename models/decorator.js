const Decorator = function(){
  this.paintStock = []
};




Decorator.prototype.addCan = function (can) {
  this.paintStock.push(can)
};


Decorator.prototype.totalLitres = function () {
  total = 0
  stock = this.paintStock
  for (can of stock){
  total += can.litres
  };
  return total
};


Decorator.prototype.ifEnoughPaint = function (room) {
  if(this.totalLitres() >= room.area){
    return true
  } else {
    return false
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.ifEnoughPaint(room) === true){
    room.paint()
  };
};



module.exports = Decorator
