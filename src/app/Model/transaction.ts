export interface TransferDto {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}

export interface TransactionResponse {
  success: boolean;
  message: string;
}