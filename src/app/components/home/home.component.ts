import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  result: string = '';
  error: string = '';

  // Replace with your actual subscription key
  subscriptionKey: string = '92a698c1de07467abe557ba6cec2bece';

  constructor(private http: HttpClient) {}

  callApi() {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.subscriptionKey,
    });

    const url = '/api/GetUserInfo'; // Replace with your API URL

    this.http.get<any>(url, { headers }).subscribe({
      next: (response) => {
        this.result = JSON.stringify(response, null, 2);
        this.error = '';
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error = 'API call failed. Check console for details.';
        this.result = '';
      },
    });
  }
}
