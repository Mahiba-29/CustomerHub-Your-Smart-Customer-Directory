import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  
  template: `
<mat-card class="form-card">
  <h2>Add New Contact</h2>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Full Name</mat-label>
    <input matInput [(ngModel)]="name">
  </mat-form-field>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Phone</mat-label>
    <input matInput [(ngModel)]="phone">
  </mat-form-field>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Email</mat-label>
    <input matInput [(ngModel)]="email">
  </mat-form-field>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Company</mat-label>
    <input matInput [(ngModel)]="company">
  </mat-form-field>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Address</mat-label>
    <textarea matInput [(ngModel)]="address"></textarea>
  </mat-form-field>

  <mat-form-field class="full" appearance="outline">
    <mat-label>Notes</mat-label>
    <textarea matInput [(ngModel)]="notes"></textarea>
  </mat-form-field>

  <button mat-raised-button color="primary" (click)="save()">
    Save Contact
  </button>
</mat-card>

`,
styles: [`
  .form-card {
    max-width: 500px;
    margin: auto;
    text-align: center;
  }

  .subtitle {
    color: gray;
    margin-bottom: 20px;
  }

  .full-width {
    width: 100%;
    margin-bottom: 15px;
  }

  .submit-btn {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
  }
`]

})
export class AddCustomerComponent {

  name = '';
  phone = '';
  email = '';
  company = '';
  address = '';
  notes = '';

  constructor(private service: CustomerService) {}

  save() {
    this.service.addCustomer({
      id: Date.now(),
      name: this.name,
      phone: this.phone,
      email: this.email,
      company: this.company,
      address: this.address,
      notes: this.notes,
      createdAt: new Date().toISOString()
    });

    // Optional: reset form after save
    this.name = '';
    this.phone = '';
    this.email = '';
    this.company = '';
    this.address = '';
    this.notes = '';
  }
}


