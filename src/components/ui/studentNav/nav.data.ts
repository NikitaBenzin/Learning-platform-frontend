import {
  Blocks,
  Settings,
  UserRound,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';

export interface IMenuItem {
  icon: LucideIcon;
  title: string;
  link: string;
}

export const MENU: IMenuItem[] = [
  {
    icon: UserRound,
    title: 'Student page',
    link: '/student',
  },
  {
    icon: Settings,
    title: 'Settings',
    link: '/student/settings',
  },
  {
    icon: Blocks,
    title: 'Intensives',
    link: '/student/intensives',
  },
  {
    icon: Warehouse,
    title: 'Storage',
    link: '/student/storage',
  },
];
