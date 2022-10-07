import { LoginCredentials, User } from '../models';

export const ACCOUNTS: Array<User> = [];

export function validate_user(creds: Partial<LoginCredentials>): User | null {
  const valid_user = ACCOUNTS.find(
    (val: User) => val.account_no === creds.account_no && val.pin === creds.pin,
  );
  if (valid_user) {
    return valid_user;
  } else {
    return null;
  }
}

export let SESSION: User | null = null;

export function set_session(user: User) {
  SESSION = user;
}
export function get_session() {
  return SESSION;
}
