import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { confirmPasswordValidator } from '@klassifieds/shared/validators'
import { UserService } from '@klassifieds/user/domain'

@Component({
  selector: 'klassifieds-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', Validators.required),
    },
    [confirmPasswordValidator]
  )

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    // placeholder
  }

  createUser(signInForm: FormGroup) {
    this.userService
      .createUser(signInForm.get('email')?.value, signInForm.get('password')?.value)
      .subscribe((data) => console.log(JSON.stringify(data)))
  }
}
