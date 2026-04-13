import { Component } from '@angular/core';
import { TransactionService } from '../../Services/transaction-service';
import { TransferDto } from '../../Model/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './transaction.html',
  styleUrls: ['./transaction.css']
})
export class TransactionComponent {

  transferData: TransferDto = {
    fromAccountId: 0,
    toAccountId: 0,
    amount: 0
  };

  constructor(private service: TransactionService) {}

  transfer() {
    this.service.transfer(this.transferData).subscribe({
      next: (res) => {
        console.log(res);
        alert('✅ Transaction Successful');
      },
      error: (err) => {
        console.error(err);
        alert('❌ Transaction Failed');
      }
    });
  }
}