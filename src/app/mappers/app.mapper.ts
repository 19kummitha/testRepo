import { Injectable } from '@angular/core';
import { UserProfileModel } from '../models';
import { UserProfileViewModel } from '../view-models';

@Injectable({
  providedIn: 'root',
})
export class UserProfileViewMapper {
  mapModelsToViewModels(models: UserProfileModel[]): UserProfileViewModel[] {
    const viewModels: UserProfileViewModel[] = [];

    models.forEach((model) => viewModels.push(this.mapModelToViewModel(model)));
    return viewModels;
  }

  /**
   * map model to view-model
   */
  mapModelToViewModel(model: UserProfileModel): UserProfileViewModel {
    const viewModel: UserProfileViewModel = {
      id: model.id,
      name: model.name,
      company: model.company,
      username: model.username,
      email: model.email,
      address: model.address,
      zip: model.zip,
      state: model.state,
      country: model.country,
      phone: model.phone,
      photo: model.photo,
    };

    return viewModel;
  }
}
