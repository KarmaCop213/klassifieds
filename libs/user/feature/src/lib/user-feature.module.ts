import { MaterialModule } from '@app/material/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserDomainModule } from '@klassifieds/user/domain';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    UserDomainModule,
    RouterModule.forChild([
      { path: 'sign-in', pathMatch: 'full', component: SignInComponent },
    ]),
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [SignInComponent],
  exports: [SignInComponent],
})
export class UserFeatureModule {}
