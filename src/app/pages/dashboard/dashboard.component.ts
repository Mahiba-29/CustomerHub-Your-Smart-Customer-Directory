import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
    <!-- Stats Section -->
    <div class="stats-grid">
      <mat-card class="stat-card">
        <h3>Total Customers</h3>
        <p class="stat-number">{{ totalCustomers }}</p>
      </mat-card>

      <mat-card class="stat-card">
        <h3>New Customers</h3>
        <p class="stat-number">+{{ totalCustomers }}</p>
      </mat-card>

      <mat-card class="stat-card">
        <h3>Actions</h3>
        <p class="stat-number">3</p>
      </mat-card>
    </div>

    <!-- Quick Actions -->
    <mat-card class="action-card">
      <h2>Quick Actions</h2>
      <div class="actions">
        <button mat-raised-button color="primary" routerLink="/add-customer">
          Add Customer
        </button>
        <button mat-stroked-button color="primary" routerLink="/customers">
          View Customers
        </button>
      </div>
    </mat-card>

    <!-- About App -->
    <mat-card class="about-card">
      <h2>About This Application</h2>
      <p>
        CustomerApp is a simple and efficient customer management system
        designed to store, view, and manage customer information.
      </p>
      <ul>
        <li> Centralized customer data</li>
        <li> Easy data entry</li>
        <li> Clean and intuitive UI</li>
        <li> Scalable for future enhancements</li>
      </ul>
    </mat-card>
  `,
  styles: [`
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      text-align: center;
    }

    .stat-number {
      font-size: 32px;
      font-weight: 600;
      color: #3f51b5;
    }

    .action-card {
      margin-bottom: 30px;
      text-align: center;
    }

    .actions button {
      margin: 10px;
    }

    .about-card ul {
      padding-left: 20px;
    }

    .about-card li {
      margin-bottom: 8px;
    }
  `]
})
export class DashboardComponent implements OnInit {

  totalCustomers = 0;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.totalCustomers = this.customerService.getCustomers().length;
  }
}
