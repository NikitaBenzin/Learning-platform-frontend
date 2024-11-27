import {
  Blocks,
  LucideIcon,
  Settings,
  UserRound,
  Warehouse,
} from 'lucide-react';

export interface IMenuItem {
  icon: LucideIcon;
  link: string;
}

export const MENU: IMenuItem[] = [
  {
    icon: UserRound,
    link: '/student',
  },
  {
    icon: Settings,
    link: '/student/settings',
  },
  {
    icon: Blocks,
    link: '/student/intensives',
  },
  {
    icon: Warehouse,
    link: '/student/storage',
  },
];
