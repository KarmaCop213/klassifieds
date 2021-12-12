import { MaterialModule } from '@app/material/material.module'
import { TranslateModule } from '@ngx-translate/core'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { UserDomainModule } from '@klassifieds/user/domain'

import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  imports: [
    CommonModule,
    UserDomainModule,
    RouterModule.forChild([
      { path: 'sign-up', pathMatch: 'full', component: SignUpComponent },
    ]),
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class UserFeatureModule {}
