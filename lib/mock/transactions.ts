import { createContext } from 'react';
import { Transaction } from '../models';

import Avatar from '../../assets/julian-myles.jpg';


export const Account = createContext({
  balance: 20_000,
  set_balance: (amount: number) => { },
});

export const TRANSACTION: Transaction[] = [
  {
    amount: 2000,
    t_type: 'deposit',
    user: {
      first_name: 'John',
      last_name: 'Doe',
      account_no: '12341',
      avatar: Avatar,
    },
  },
  {
    amount: 4_000,
    t_type: 'withdrawal',
    user: {
      first_name: 'Jane',
      last_name: 'Doe',
      account_no: '34566',
      avatar: Avatar,
    },
  },
  {
    amount: 8_000,
    t_type: 'deposit',
    user: {
      first_name: 'Jane',
      last_name: 'Doe',
      account_no: '34566',
      avatar: Avatar,
    },
  },

  {
    amount: 10_000,
    t_type: 'withdrawal',
    user: {
      first_name: 'Jane',
      last_name: 'Doe',
      account_no: '34566',
      avatar: Avatar,
    },
  },
];

export function addTransaction(new_traction: Transaction) {
  TRANSACTION.push(new_traction);
}

export interface Cheque {
  no: string;
  date_issue: string;
  active: boolean;
}

export const CHEQUES: Cheque[] = [
  {
    no: "23443",
    date_issue: "02/09/2022",
    active: true,
  },
  {
    no: "23343",
    date_issue: "02/09/2022",
    active: true
  },
]

export function addCheque(new_cheque: Transaction) {

}
