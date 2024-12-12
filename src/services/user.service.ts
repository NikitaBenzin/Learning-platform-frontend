import { axiosClassic } from '@/api/axios';
import type { IUser } from '@/types/auth.types';

class UserService {
  private _STUDENT = '/student';

  getProfile() {
    return axiosClassic.get<IUser>(`${this._STUDENT}`);
  }
}
export const userService = new UserService();
