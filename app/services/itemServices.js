class ItemServices {
  constructor() {
    this.hadAxe = false;
  }
  getItemAxe() {
    this.hadAxe = true;
    return this.hadAxe;
  }
}
module.exports = new ItemServices();