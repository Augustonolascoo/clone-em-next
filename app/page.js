import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src="/images/Facebook.png"
          alt="logo Facebook"
          className={styles.logo}
          width={200}
          height={110}
        />
        <div className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <h2 className={styles.headerTitle}>Entrar no Facebook</h2>
          </div>
          <form id="login-form" className={styles.loginForm}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email ou telefone"
              required
              className={styles.input}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
              className={styles.input}
            />
            <button className={styles.enter} type="submit">Entrar</button>
            <div className={styles.links}>
              <a href="#">Esqueceu a senha?</a>
              <a href="#">Cadastre-se no Facebook</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
