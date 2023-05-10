import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        React Customer
      </h1>
      <div>
      <Link to={`/customers-list`}>Customers List</Link> | 
      <Link to={`/customer`}> Customer Form</Link> 
      </div>
    </header>
  );
}

export default MainHeader;