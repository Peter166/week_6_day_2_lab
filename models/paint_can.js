const PaintCan = function(litres){
  this.litres = litres
};

PaintCan.prototype.checkEmpty = function(){
  if (this.litres > 0){
    return false
  } else {
    return true
  };
};





PaintCan.prototype.emptyItSelf = function () {
     this.litres = 0
};



module.exports = PaintCan
