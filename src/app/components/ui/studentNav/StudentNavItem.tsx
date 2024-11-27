import Link from 'next/link';
import { IMenuItem } from './nav.data';
import styles from './StudentNav.module.scss';
export const StudentNavItem = ({
  item,
  path,
}: {
  item: IMenuItem;
  path: string;
}) => {
  return (
    <Link className={path === item.link ? styles.active : ''} href={item.link}>
      <item.icon />
    </Link>
  );
};
