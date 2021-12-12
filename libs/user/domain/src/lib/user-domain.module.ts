import { ApolloModule } from 'apollo-angular'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { UserService } from './infrastructure/user.service'

@NgModule({
  imports: [CommonModule],
  providers: [UserService],
})
export class UserDomainModule {}
