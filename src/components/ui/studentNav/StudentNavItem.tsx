import Link from 'next/link';
import { type IMenuItem } from './nav.data';
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
      <span className={styles.linkName}>{item.title}</span>
    </Link>
  );
};
