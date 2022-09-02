import { Components } from "./components/Components";
import styles from "./app.module.css"

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1 className={styles.title}>Taller JavaScript</h1>
        <h3 className={styles.subtitle}>Jose Manuel Martínez</h3>
      </header>
      <div className={styles.container}>
        <Components/>
      </div>
    </div>
  );
}

export default App