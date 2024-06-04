import Image from "next/image";
import styles from "./page.module.css";
import Beian from '@/components/beian';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p style={{
          fontSize: "30px",
        }}>橙堡之家</p>
      </div>
      <img style={{width: '400px'}} alt="橙堡" width="400" src="https://i.postimg.cc/qMqg29SV/pngg.jpg" />
      <div className={styles.center}>
        <p style={{
          fontSize: "24px",
        }}>敬请期待...</p>
      </div>
      <Beian type="fixed" />
    </main>
  );
}
