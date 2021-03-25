import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User>;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute, private userService: UserService) { 
    this.user$ = afAuth.authState;
    this.userService = userService;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());  
  }

  logout(){
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser>{
    return this.user$.pipe(switchMap(user => {
      if(user)
        return this.userService.get(user.uid).valueChanges()
      return of(null);
    }));
  }

}
