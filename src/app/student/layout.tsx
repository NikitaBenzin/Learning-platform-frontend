import { StudentNav } from '../components/ui/studentNav/StudentNav';
import styles from './Student.module.scss';
const StudentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <StudentNav />
    </div>
  );
};

export default StudentLayout;
