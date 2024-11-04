import { axiosClassic } from '@/api/axios';

import { IAuthResponse, IFormData } from '@/types/auth.types';
import { removeFromStorage, saveTokenStorage } from './auth.helper';

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

class AuthService {
  async main(
    type: 'login' | 'register',
    data: IFormData,
    token?: string | null
  ) {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/${type}`,
      data,
      {
        headers: {
          recaptcha: token,
        },
      }
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async getNewTokens() {
    const response =
      await axiosClassic.post<IAuthResponse>('/auth/access-token');

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      '/auth/access-token',
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );

    return response.data;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');

    if (response.data) removeFromStorage();

    return response;
  }
}

export default new AuthService();
