export interface Fraud {
  id: number;
  transactionId: number;
  reason: string;
  riskScore: number;
  createdAt: string; // DateTime
}