import { Routes } from '@angular/router';

import { AccountComponent } from './Components/account/account';
import { TransactionComponent } from './Components/transaction/transaction';
import { FraudComponent } from './Components/fraud/fraud';

export const routes: Routes = [
  // 🔹 Default Route
  { path: '', redirectTo: 'account', pathMatch: 'full' },

  // 🔹 Modules
  { path: 'account', component: AccountComponent },
  { path: 'transfer', component: TransactionComponent },
  { path: 'fraud', component: FraudComponent },

  // 🔹 Fallback (optional)
  { path: '**', redirectTo: 'account' }
];