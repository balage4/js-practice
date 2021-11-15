export default class Contact {
  constructor(name, phone, email, isLeader = false) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.isLeader = isLeader
  }

  getName() {
    return this.name;
  }

  setLeaderStatus(bool) {
    this.isLeader = bool;
  }
  getLeaderStatus() {
    return this.isLeader;
  }
}