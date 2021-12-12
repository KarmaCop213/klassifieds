import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { confirmEmailValidator } from '@klassifieds/shared/validators'
import { UserService } from '@klassifieds/user/domain'

@Component({
  selector: 'klassifieds-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: confirmEmailValidator }
  )

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {}

  createUser(signInForm: FormGroup) {
    this.userService
      .createUser(
        signInForm.get('email')?.value,
        signInForm.get('password')?.value
      )
      .subscribe((data) => console.log(JSON.stringify(data)))
  }
}
