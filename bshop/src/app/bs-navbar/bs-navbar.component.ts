import { Component} from '@angular/core';
import {Observable} from 'rxjs'
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

user$: Observable<firebase.default.User>;

constructor(public auth: AuthService) { 
  this.user$ = auth.user$;
}

logout(){
  this.auth.logout();
}

}
