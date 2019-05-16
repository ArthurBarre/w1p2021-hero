class FeedService {
  constructor() {
    this.foodQuantity = 1;
    this.foodLife = 3;
  }
  quantity() {
    this.foodQuantity--;
  }
  life(){
    this.foodLife=4;
  }
  quantityFoodValue() {
    return this.foodQuantity;
    
  }
  lifeFoodValue(){
    return this.foodLife;
  }
}

module.exports = new FeedService();