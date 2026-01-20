import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomerService } from '../../core/services/customer.service';
import { Customer } from '../../core/models/customer.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card *ngFor="let c of customers" class="contact-card">
      <h3>{{ c.name }}</h3>
      <p>📞 {{ c.phone }}</p>
      <p>📧 {{ c.email }}</p>
      <p>🏢 {{ c.company }}</p>
      <p>📍 {{ c.address }}</p>
      <p><small>Added: {{ c.createdAt | date }}</small></p>

      <button *ngIf="isAdmin"
              mat-stroked-button
              color="warn"
              (click)="delete(c.id)">
        Delete
      </button>
    </mat-card>
  `
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  isAdmin = false;

  constructor(
    private service: CustomerService,
    private auth: AuthService   // ✅ injected here
  ) {}

  ngOnInit() {
    this.isAdmin = this.auth.isAdmin();
    this.customers = this.service.getCustomers();
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.service.deleteCustomer(id);
      this.customers = this.service.getCustomers();
    }
  }
}
