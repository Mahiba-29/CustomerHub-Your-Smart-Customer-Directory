import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { SEED_CUSTOMERS } from '../data/seed-customers';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private storageKey = 'contacts';

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    if (typeof window === 'undefined') return;

    const existing = localStorage.getItem(this.storageKey);
    if (!existing) {
      localStorage.setItem(this.storageKey, JSON.stringify(SEED_CUSTOMERS));
    }
  }

  getCustomers(): Customer[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addCustomer(customer: Customer) {
    const customers = this.getCustomers();
    customers.push(customer);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  deleteCustomer(id: number) {
    const customers = this.getCustomers().filter(c => c.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }
}
