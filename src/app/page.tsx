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
      <img className={styles.showimg} alt="橙堡" src="https://i.postimg.cc/qMqg29SV/pngg.jpg" />
      <div className={styles.text}>
        <p style={{
          fontSize: "24px",
        }}>敬请期待...</p>
      </div>
      <Beian />
    </main>
  );
}
