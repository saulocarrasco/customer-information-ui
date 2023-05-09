import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        React Customer
      </h1>
    </header>
  );
}

export default MainHeader;