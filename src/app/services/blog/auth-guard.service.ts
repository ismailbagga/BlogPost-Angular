import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { AuthenticationService } from '../app-user/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // const obs =  this.authService.getLoginStateAsObservable();

    return this.authService.getLoginStateAsObservable().pipe(
      skipWhile((value) => value === null),
      take(1),
      tap((state) => {
        if (!state) {
          this.router.navigateByUrl('error/unauthorize');
        }
      }),
      map((value) => value || false)
    );
  }
}
