import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post<{ token: string }>(
        'https://fakestoreapi.com/auth/login',
        credentials
      )
      .subscribe({
        next: (response) => {
          console.log('Login Success:', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin/home']);
        },
        error: (error) => {
          console.error('Login Failed:', error);
          this.errorMessage = 'Invalid username or password';
        },
      });
  }
}
