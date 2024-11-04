import style from './Admin.module.scss';

export default async function AdminPage() {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h2 className={style.heading}>Admin Page</h2>
      </main>
    </div>
  );
}
