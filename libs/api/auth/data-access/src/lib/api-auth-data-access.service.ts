import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { from, Observable, switchMap } from 'rxjs'
import { MongoRepository } from 'typeorm'

import { User } from './entities/user.entity'

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: MongoRepository<User>
  ) {}

  createUser(email: string, password: string): Observable<User> {
    const saltOrRounds = 10
    return from(bcrypt.hash(password, saltOrRounds)).pipe(
      switchMap((hash) => from(this.usersRepository.save(new User({ email, password: hash }))))
    )
  }
}
