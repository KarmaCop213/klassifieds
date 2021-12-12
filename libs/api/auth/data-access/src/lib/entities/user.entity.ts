import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('users')
export class User {
  @ObjectIdColumn() id: ObjectID
  @Column() email: string
  @Column() password: string

  constructor(user?: Partial<User>) {
    Object.assign(this, user)
  }
}
