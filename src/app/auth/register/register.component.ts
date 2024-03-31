import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
    role: 3
  }
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {

    })
  }
  submit() {
    this.authService.register(this.form).subscribe(res => {

    })
  }
}
