import { UserRole } from '@/services/auth/auth.types';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function AuthLayout({
  children,
}: PropsWithChildren<unknown>) {
  const user = await getServerAuth();

  if (user?.isLoggedIn)
    return redirect(
      user.rights.includes(UserRole.ADMIN) ? '/asdasd' : '/asdasd'
    );
  return children;
}
