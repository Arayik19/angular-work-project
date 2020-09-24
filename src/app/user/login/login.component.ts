import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any[] = JSON.parse(localStorage.getItem("users"));

  profileForm = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

  }


  onSignIn() {
    this.userData.forEach((item) => {
      if ((item.Username === this.profileForm.value.Username && item.Password === this.profileForm.value.Password) ||
        (item.Email === this.profileForm.value.Username && item.Password === this.profileForm.value.Password)) {
        localStorage.setItem("user", JSON.stringify(item));
        alert("You have logged in!")
        this.router.navigate(['/menu'])
      }else{        
        alert("Wrong login credentials!")
        this.profileForm.reset();
      }
    })
  }
}
