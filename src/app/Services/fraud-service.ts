import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fraud } from '../Model/fraud';

@Injectable({ providedIn: 'root' })
export class FraudService {

  private base = 'https://localhost:7255/api/fraud';

  constructor(private http: HttpClient) {}

  // 🔍 Get fraud by ID
  getFraudById(id: number): Observable<Fraud> {
    return this.http.get<Fraud>(`${this.base}/${id}`);
  }
}