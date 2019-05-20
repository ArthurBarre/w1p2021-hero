import data from '../json/user.json';
class DayService {
  constructor() {
    this.day = data.user.day;
  }
  increment() {
    this.day++;
  }
  test() {
    return this.day;
  }
}
module.exports = new DayService();