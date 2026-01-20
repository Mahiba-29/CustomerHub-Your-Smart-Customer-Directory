import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
  <mat-toolbar class="navbar">
    <span class="logo">CustomerApp</span>
    <span class="spacer"></span>

    <button mat-button routerLink="/">Dashboard</button>
    <button mat-button routerLink="/customers">Customers</button>
    <button mat-raised-button color="accent" routerLink="/add-customer">
      Add Customer
    </button>
  </mat-toolbar>
`,
styles: [`
  .navbar {
    background: linear-gradient(90deg, #3f51b5, #5c6bc0);
    color: white;
    padding: 0 30px;
  }

  .logo {
    font-size: 20px;
    font-weight: 600;
  }

  .spacer {
    flex: 1;
  }

  button {
    margin-left: 10px;
  }
`]

})
export class NavbarComponent {}
