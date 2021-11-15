export default class Customer {
  constructor(name, postal, city, address, taxNumber, ciNumber) {
    this.name = name;
    this.postal = postal;
    this.city = city;
    this.address = address;
    this.taxNumber = taxNumber;
    this.ciNumber = ciNumber;
    this.contacts = [];
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return `${this.postal} ${this.city} ${this.address}`;
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }

  getLeader() {
    let leaderName;
    this.contacts.forEach(contact => {
      if (contact.getLeaderStatus()) leaderName = contact.getName();
    });
    return leaderName;
  }
  setLeader(name) {
    this.contacts.forEach(contact => {
      if (contact.getName() === name) contact.setLeaderStatus(true);
      if ((contact.getName() !== name) && (contact.getLeaderStatus())) contact.setLeaderStatus(false);
    });
  }
}


