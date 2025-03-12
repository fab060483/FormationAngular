import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthenticationServiceService);
   
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
