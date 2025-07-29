import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number | null = null;
  isLocked: boolean = false;

  displayedColumns: string[] = ['label', 'countryCode', 'areaCode', 'phoneNumber', 'action'];

  user: any = {
    appUserId: 'IMG_UAT_5401242',
    hashcode: '0316a47...2256ff2ecc7be',
    organization: 'mercer',
    appScope: 'oviewukv4_stg',
    locale: 'en-US',
    phoneDetails: [
      { label: 'LN Mob', countryCode: '44', areaCode: '', phoneNumber: '88557' },
      { label: 'LN work', countryCode: '44', areaCode: '', phoneNumber: '22197' }
    ]
  };

  defaultPhones = [
    { label: 'LN Mob', countryCode: '44', areaCode: '', phoneNumber: '88557' },
    { label: 'LN Work', countryCode: '44', areaCode: '', phoneNumber: '22197' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
  }

  lockUser() {
    this.isLocked = true;
    alert('User locked (mock)');
  }

  unlockUser() {
    this.isLocked = false;
    alert('User unlocked (mock)');
  }
}
