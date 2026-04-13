import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account, AccountDto } from '../Model/account';

@Injectable({ providedIn: 'root' })
export class AccountService {

  // 🔥 Direct API URL
  private base = 'https://localhost:7255/api/account';

  constructor(private http: HttpClient) {}

  // GET /api/account/{userId}
  getAccount(userId: number): Observable<Account> {
    return this.http.get<Account>(`${this.base}/${userId}`);
  }

  // POST /api/account/create
  createAccount(dto: AccountDto): Observable<Account> {
    return this.http.post<Account>(`${this.base}/create`, dto);
  }
}