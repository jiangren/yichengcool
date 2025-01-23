import Image from "next/image";
import styles from "./page.module.css";
import Beian from '@/components/beian';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <p style={{
          fontSize: "30px",
        }}>橙堡之家</p>
      </div>
      <img className={styles.fixShowimg} alt="橙堡" loading="lazy" src="https://s1.imagehub.cc/images/2024/06/04/e8e2ab01b3bee2b7e68965fbff8af898.jpeg" />
      <div className={styles.text}>
        <p style={{
          fontSize: "24px",
        }}>敬请期待...</p>
      </div>
      <Beian />
    </main>
  );
}
