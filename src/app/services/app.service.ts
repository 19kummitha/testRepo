import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { UserProfileModel } from '../models';
import { UserProfileViewMapper } from '../mappers';
import { UserProfileViewModel } from '../view-models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private http: HttpClient,
    private userProfileMapper: UserProfileViewMapper
  ) {}

  private url = 'https://fake-json-api.mock.beeceptor.com/users';
  // private url = 'https://jsonplaceholder.typicode.com/todos/1';

  getData(): Observable<UserProfileViewModel[]> {
    return this.http
      .get<UserProfileModel[]>(this.url)
      .pipe(
        map((data: UserProfileModel[]): UserProfileViewModel[] =>
          this.userProfileMapper.mapModelsToViewModels(data)
        )
      );
  }
  getUserById(id: number): Observable<UserProfileViewModel> {
  return this.getData().pipe(
    map((users: UserProfileViewModel[]) =>
      users.find(user => user.id === id)!
    )
  );
}

}
