export enum UserRole {
  USER,
  ADMIN,
}

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
}

export interface IFormData extends Pick<IUser, 'email'> {
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser | null;
}
