import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p style={{
          fontSize: "30px",
        }}>橙堡之家</p>
      </div>
      <div className={styles.center}>
        <p style={{
          fontSize: "24px",
        }}>敬请期待...</p>
      </div>
    </main>
  );
}
