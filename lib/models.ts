export interface LoginCredentials {
  account_no: string;
  pin: string;
}

export interface User {
  first_name: string;
  last_name: string;
  account_no: string;
  pin: string;
  avatar: string;
}

export type TransactionType = 'withdrawal' | 'deposit';
export interface Transaction {
  user: Partial<User>;
  amount: number;
  t_type: TransactionType;
}
