import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { UserProfileViewModel } from 'src/app/view-models/app.view-model';

@Component({
  selector: 'app-user-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: number | null = null;
  user: UserProfileViewModel | null = null;
  isLocked: boolean = false;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.userId) {
      this.appService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
        this.isLocked = false; // default to unlocked
      });
    }
  }

  lockUser() {
    this.isLocked = true;
    alert('User locked (mock)');
    // In a real app, call an API here to update the lock status
  }

  unlockUser() {
    this.isLocked = false;
    alert('User unlocked (mock)');
    // In a real app, call an API here to update the lock status
  }
}
