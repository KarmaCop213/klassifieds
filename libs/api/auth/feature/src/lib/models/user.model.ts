import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => String)
  email: string

  @Field(() => String)
  password: string
}
