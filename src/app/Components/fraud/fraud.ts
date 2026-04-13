import { Component } from '@angular/core';
import { FraudService } from '../../Services/fraud-service';
import { Fraud } from '../../Model/fraud';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fraud',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fraud.html',
  styleUrls: ['./fraud.css']
})
export class FraudComponent {

  fraudId!: number;
  fraud: Fraud | null = null;

  constructor(private fraudService: FraudService) {}

  getFraud() {
    this.fraudService.getFraudById(this.fraudId).subscribe({
      next: (res) => {
        this.fraud = res;
      },
      error: (err) => {
        console.error(err);
        alert('Fraud record not found');
      }
    });
  }
}