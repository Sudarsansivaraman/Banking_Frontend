import { Routes } from '@angular/router';

import { AccountComponent } from './Components/account/account';
import { TransactionComponent } from './Components/transaction/transaction';
import { FraudComponent } from './Components/fraud/fraud';
import { LoginComponent } from './Components/login/login';
import { RegisterComponent } from './Components/register/register';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
  // Auth routes (public)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected routes
  { path: 'account', component: AccountComponent, canActivate: [authGuard] },
  { path: 'transfer', component: TransactionComponent, canActivate: [authGuard] },
  { path: 'fraud', component: FraudComponent, canActivate: [authGuard] },

  // Default & fallback
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
