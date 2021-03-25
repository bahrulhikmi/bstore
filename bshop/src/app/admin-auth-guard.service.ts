import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate() {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.userService.get(user.uid).valueChanges();
      }), 
      map(appUser => appUser.isAdmin)
    );
  }
}
