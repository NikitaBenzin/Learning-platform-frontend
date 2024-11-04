import { instance } from '@/api/axios';
import { IUser } from '@/types/auth.types';

class UserService {
  private _BASE_URL = '/users';

  async fetchProfile() {
    return instance.get<IUser>(`${this._BASE_URL}/profile`);
  }
}

export default new UserService();
