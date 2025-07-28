import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string | null = null;
  isLocked: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    // In real usage, you'd fetch user details here
  }

  lockUser() {
    this.isLocked = true;
    alert('Lock button clicked (mock)');
  }

  unlockUser() {
    this.isLocked = false;
    alert('Unlock button clicked (mock)');
  }
}
