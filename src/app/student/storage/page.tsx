import styles from './Storage.module.scss';

const Storage = () => {
  return (
    <>
      <h2 className='mb-4'>Storage</h2>
      <ul className={styles.filesGallery}>
        <li className={styles.file}>
          <div className={styles.fileInfo}>
            <span className={styles.fileNumber}>#1</span>
            <h3>Front-end for beginners</h3>
            <a
              href='uploads/repositories/frontend-for-beginners'
              download='frontend-for-beginners'
              target='_blank'
            >
              Download
            </a>
          </div>
        </li>
        <li className={styles.file}>
          <div className={styles.fileInfo}>
            <span className={styles.fileNumber}>#2</span>
            <h3>Front-end for beginners</h3>
            <a
              href='uploads/repositories/frontend-for-beginners'
              download='frontend-for-beginners'
              target='_blank'
            >
              Download
            </a>
          </div>
        </li>
        <li className={styles.file}>
          <div className={styles.fileInfo}>
            <span className={styles.fileNumber}>#3</span>
            <h3>Front-end for beginners</h3>
            <a
              href='uploads/repositories/frontend-for-beginners'
              download='frontend-for-beginners'
              target='_blank'
            >
              Download
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Storage;
