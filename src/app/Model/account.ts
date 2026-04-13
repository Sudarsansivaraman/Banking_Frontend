export interface Account {
  id: number;
  userId: number;
  balance: number;
}

export interface AccountDto {
  userId: number;
  initialBalance: number;
}

export interface AccountResponse {
  success: boolean;
  data: Account;
  message: string;
}
