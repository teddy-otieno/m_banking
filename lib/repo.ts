import {validate_user} from './mock/accounts';
import {LoginCredentials} from './models';

export async function submit_login_credentials(
  creds: Partial<LoginCredentials>,
) {
  return validate_user(creds);
}
