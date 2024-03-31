import { Component , Input,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab10';
  @Input() productHome: Products[] = []

  constructor(private authService: AuthService) { }
  isAuthenticated() {
    return this.authService.isAuthenticated
  }


  logout() {
    this.authService.logout()
  }

  ngOnInit() {
  }

}
