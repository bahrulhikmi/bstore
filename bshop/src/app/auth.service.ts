import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User>;
  router: Router;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute, router: Router) { 
    this.user$ = afAuth.authState;
    this.router = router;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());  
  }

  logout(){
    this.afAuth.signOut();
  }

}
