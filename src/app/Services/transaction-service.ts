import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferDto } from '../Model/transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private base = 'https://localhost:7255/api/transaction'; // 🔥 change if needed

  constructor(private http: HttpClient) {}

  // 💸 Transfer Money
  transfer(dto: TransferDto): Observable<any> {
    return this.http.post(`${this.base}/transfer`, dto);
  }

}