import { UserRole } from '@/services/auth/auth.types';
import { protectPage } from '@/utils/server/protect-page';
import { PropsWithChildren } from 'react';

export default async function AdminLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.ADMIN);
  return children;
}
