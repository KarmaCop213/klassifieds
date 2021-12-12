import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateUserInput } from './models/inputs/create-user.input'
import { User } from './models/user.model'

@Resolver(() => User)
export class ApiAuthFeatureResolver {
  @Query(() => String)
  readUser(): User {
    return { email: 'test email', password: 'test password' } as User
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    console.log(JSON.stringify(createUserInput))
    return { ...createUserInput } as User
  }
}
