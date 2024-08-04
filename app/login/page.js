'use client';
import styles from './page.module.css';
//create event handler for button onClick

export default function Login() {
  const MyButton = () => {
    console.log('clicked');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Coffee Shop</h1>
      <p className={styles.subtitle}>Sign in to order and view the menu</p>
      <div className={styles.buttons}>
        <button className={styles.googleButton} onClick={MyButton}>
          Sign in with Google
        </button>
        <button className={styles.guestButton} onClick={MyButton}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
