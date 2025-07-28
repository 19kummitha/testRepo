import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppService } from '../../services/app.service';
import { UserProfileViewModel } from 'src/app/view-models/app.view-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  constructor(private appService: AppService,private router: Router) {}
viewDetails(userId: string | number): void {
    this.router.navigate(['/user-details', userId]); // Navigates to /user-details/:id
  }

  // Original data from API
  allUsers: UserProfileViewModel[] = [];
  
  // Filtered data for display
  filteredUsers: UserProfileViewModel[] = [];
  
  // Search filters
  searchFilters = {
    applicationUserId: '',
    appScope: '',
    organization: '',
    emailAddress: '',
    phoneNumber: ''
  };

  ngOnInit() {
    // Auto-fetch data on component initialization
    this.fetchData();
  }

  fetchData() {
    this.appService.getData().subscribe({
      next: (response) => {
        this.allUsers = response;
        this.filteredUsers = [...response]; // Initialize filtered data
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  clearData() {
    this.allUsers = [];
    this.filteredUsers = [];
    this.resetFilters();
  }

  resetFilters() {
    this.searchFilters = {
      applicationUserId: '',
      appScope: '',
      organization: '',
      emailAddress: '',
      phoneNumber: ''
    };
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.allUsers.filter(user => {
      const matchesUserId = !this.searchFilters.applicationUserId || 
        user.id.toString().toLowerCase().includes(this.searchFilters.applicationUserId.toLowerCase());
      
      const matchesAppScope = !this.searchFilters.appScope || 
        user.company.toLowerCase().includes(this.searchFilters.appScope.toLowerCase());
      
      const matchesOrganization = !this.searchFilters.organization || 
        user.name.toLowerCase().includes(this.searchFilters.organization.toLowerCase());
      
      const matchesEmail = !this.searchFilters.emailAddress || 
        user.email.toLowerCase().includes(this.searchFilters.emailAddress.toLowerCase());
      
      const matchesPhone = !this.searchFilters.phoneNumber || 
        user.phone.toLowerCase().includes(this.searchFilters.phoneNumber.toLowerCase());

      return matchesUserId && matchesAppScope && matchesOrganization && 
             matchesEmail && matchesPhone;
    });
  }

  onSearchInputChange() {
    this.applyFilters();
  }

  // Removed duplicate viewDetails method to resolve error
}