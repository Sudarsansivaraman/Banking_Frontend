import { Component } from '@angular/core';
import { AccountService } from '../../Services/account-service';
import { Account, AccountDto } from '../../Model/account';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './account.html',
  styleUrls: ['./account.css']
})
export class AccountComponent {

  userId!: number;

  account: Account | null = null;

  newAccount: AccountDto = {
    userId: 0,
    initialBalance: 0
  };

  constructor(private accountService: AccountService) {}

  // 🔍 Get Account
  getAccount() {
    this.accountService.getAccount(this.userId).subscribe({
      next: (res) => {
        this.account = res;
      },
      error: () => {
        alert('Account not found');
      }
    });
  }

  // ➕ Create Account
  createAccount() {
    this.accountService.createAccount(this.newAccount).subscribe({
      next: (res) => {
        alert('Account created successfully');
        this.account = res;
      },
      error: () => {
        alert('Error creating account');
      }
    });
  }
}