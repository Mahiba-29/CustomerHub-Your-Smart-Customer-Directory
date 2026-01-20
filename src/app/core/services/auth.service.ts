import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // simulate logged-in role
  private role: 'admin' | 'user' = 'admin';

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  switchRole(role: 'admin' | 'user') {
    this.role = role;
  }
}
