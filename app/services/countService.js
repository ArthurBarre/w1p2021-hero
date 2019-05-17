import data from '../json/user.json';
class CountService {
  constructor() {
    this.count = data.user.day;
  }
  increment() {
    this.count++;
  }
  value() {
    return this.count;
  }
}

module.exports = new CountService();