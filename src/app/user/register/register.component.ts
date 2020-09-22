import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('signValidation') signValidation: ElementRef;

  profileForm = this.fb.group({
    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['',Validators.required]
  })

  emailValidationVar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  user: User;

  constructor(private fb: FormBuilder) { 
    this.user = new User();
  }

  ngOnInit(): void {
    console.log(this.user)
    console.log(name, "name")
    console.log(this.profileForm)
  }

  ngAfterViewInit(): void{
    console.log(this.signValidation, 'signValidation')
  }

  onSubmit() {
    console.warn(this.profileForm.value.Username);
  }

  formValidate() {
    // let messages = []
    // debugger
    // if (this.profileForm.value.Username === '' || this.profileForm.value.Username == null) {
    //     messages.push('Name is required')
    // }
    // if (this.profileForm.value.Password.length <= 6) {
    //     messages.push('Password must be longer than 6 characters')
    // }
    // if (this.profileForm.value.Password.length >= 20) {
    //     messages.push('Password must be less than 20 characters')
    // }
    // if (this.emailValidationVar.test(this.profileForm.value.Email) == false) {
    //     messages.push('Incorrect email format')
    // }
    // // const users = Object.values(Object.assign([], data.val()));
    // // const index = users.findIndex(x => (x.name === register.name.value || x.email === register.email.value))
    // // if (index !== -1) {
    // //     messages.push('Email or Username already exists!')
    // // }
    // if (this.profileForm.value.ConfirmPassword !== this.profileForm.value.Password) {
    //     messages.push('Passwords must match!')
    // }
    // if (messages.length > 0) {
    //   this.signValidation.nativeElement.innerText = messages.join(', ')
    //   this.signValidation.nativeElement.style.backgroundColor = "#fb8989";
    // } else {
    //     alert("AYOOOOOOO")
    // }
}

  createAccount() {
    // register.name = register.name.value;
    // register.pass = register.pass.value;
    // register.email = register.email.value;
    // ref.push(register);
    alert("Congratulations, you have created an account!");
}


}
