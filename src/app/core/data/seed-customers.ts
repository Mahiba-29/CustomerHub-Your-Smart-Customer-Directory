import { Customer } from '../models/customer.model';

export const SEED_CUSTOMERS: Customer[] = Array.from({ length: 50 }).map(
  (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    phone: `98765${1000 + i}`,
    email: `customer${i + 1}@example.com`,
    company: `Company ${i % 10 + 1}`,
    address: `Street ${i + 1}, City`,
    notes: `Important client`,
    createdAt: new Date().toISOString()
  })
);
