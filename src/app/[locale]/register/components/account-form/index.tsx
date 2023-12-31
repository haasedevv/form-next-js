import styles from './styles.module.scss';

import Header from './components/header';
import Form from './components/form';

export default function AccountForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Form />
      </div>
    </div>
  );
}
