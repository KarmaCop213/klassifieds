import { gql, Apollo } from 'apollo-angular'
import { catchError, map, Observable, throwError } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  constructor(private readonly apollo: Apollo) {}

  createUser(email: string, password: string): Observable<any> {
    const CREATE_USER = gql`
      mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
          email
          password
        }
      }
    `

    return this.apollo
      .mutate({
        mutation: CREATE_USER,
        variables: {
          createUserInput: {
            email: email,
            password: password,
          },
        },
      })
      .pipe(
        map(({ data: createUser }) => createUser),
        catchError((error) => throwError(error))
      )
  }
}
