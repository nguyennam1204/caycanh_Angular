import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './auth';
import { RegisterForm } from './auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: number = 0
  isloading: boolean = false
  protected User: User[] = []
  constructor(private router: Router, private http: HttpClient) {
    this.getUser().subscribe(res => {
      this.User = res
    })
  }
  private URL = `http://localhost:3000/users`
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}`)
  }
  login(form: User) {

    this.User.forEach(item => {
      if (form.email == item.email && form.password == item.password) {
        this.isAuthenticated = item.role
        this.router.navigate(['/'])
      }

    })

    if (this.isAuthenticated) {
      alert('login success');
     }
    else{
      alert('login not success')
      this.isAuthenticated = 0

    }
  }
  register(form: RegisterForm): Observable<User[]> {
    let alreadyexist = false;
    let nhapemail=false;
    let nhappass=false;

    this.User.forEach(item => {
      if (form.email == item.email) {
        alreadyexist = true
      }
      if(form.email==''){


        nhapemail = false
      }
      if(form.password==''){
        nhappass = false
      }
    })

    if (!nhapemail && !nhappass) {
      alert('Enter Email and password')
      return this.http.get<User[]>(`${this.URL}`)

    }else if (alreadyexist) {
      alert('Email already exists')
      return this.http.get<User[]>(`${this.URL}`)

    }else if (form.password != form.confirm_password) {
      alert('Wrong confirm password')
      return this.http.get<User[]>(`${this.URL}`)
    } else {
      let formRegister = {
        email: form.email,
        password: form.password,
        role: 1
      }
      alert('register success')
      this.router.navigate(['login'])
      return this.http.post<User[]>(`${this.URL}`, formRegister)
    }
  }
  logout() {
    this.isAuthenticated = 0
    this.router.navigate(['login'])
  }
}

