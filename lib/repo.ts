import {validate_user, ACCOUNTS} from './mock/accounts';
import {LoginCredentials, User} from './models';

import Avatar from '../assets/julian-myles.jpg';

export async function submit_login_credentials(
  creds: Partial<LoginCredentials>,
) {
  return validate_user(creds);
}

export function create_user_acccount(user_data: Partial<User>): User | null {
  const user: User = {
    first_name: user_data.first_name ?? '',
    last_name: user_data.last_name ?? '',
    account_no: user_data.account_no ?? '',
    pin: user_data.pin ?? '',
    avatar: user_data.avatar ?? Avatar,
  };

  const existing_user = ACCOUNTS.find(
    (val: User) => user.account_no === val.account_no,
  );
  if (existing_user) {
    return null;
  }

  ACCOUNTS.push(user);

  return user;
}
