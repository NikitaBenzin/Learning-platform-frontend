import { UserRole } from '@/services/auth/auth.types';
import { IUserSubscription } from './subscriptions.types';

export interface IAuthForm {}

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
  subscription: IUserSubscription;
}

export interface IFormData extends Pick<IUser, 'email'> {
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser | null;
}
