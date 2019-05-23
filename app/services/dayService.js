import data from '../json/user.json';
class DayService {
  constructor() {
    this.day = 0;
  }
  increment() {
    this.day++;
  }
  test() {
    return this.day;
  }
}
module.exports = new DayService();
