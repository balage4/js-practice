export default class Crm {
  constructor() {
    this.customers = [];
  }
  addCustomer(customer) {
    this.customers.push(customer);
  }
  addCustomers(customersArray) {
    customersArray.forEach(element => {
      this.customers.push(element);
    });
  }
  getCustomersBySearchName(name) {
    let searchedCustomers = [];
    this.customers.forEach(customer => {
      if (customer.getName().includes(name)) searchedCustomers.push(customer);
    })
  }
  countCustomers() {
    return this.customers.length;
  }
}
