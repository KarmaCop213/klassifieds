import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Observable } from 'rxjs'

import { ApiAuthDataAccessService } from '@klassifieds/api/auth/data-access'

import { CreateUserInput } from './models/inputs/create-user.input'
import { User } from './models/user.model'

@Resolver(() => User)
export class ApiAuthFeatureResolver {
  constructor(private readonly apiAuthDataAccessService: ApiAuthDataAccessService) {}

  @Query(() => String)
  readUser(): User {
    return { email: 'test email', password: 'test password' } as User
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): Observable<User> {
    console.log(JSON.stringify(createUserInput))
    const { email, password } = createUserInput
    return this.apiAuthDataAccessService.createUser(email, password)
  }
}
