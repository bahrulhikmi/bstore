import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bshop';

  constructor(private auth: AuthService, router: Router, private userService: UserService){
      auth.user$.subscribe(user =>{
        if(user){
          userService.save(user);
          router.navigateByUrl(localStorage.getItem('returnUrl'));
        }
      });
  }
}
