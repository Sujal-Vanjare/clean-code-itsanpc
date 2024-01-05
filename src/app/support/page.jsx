import ComingSoon from "@/components/ComingSoon/comingSoon";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <main className={styles.page}>
      <ComingSoon />
    </main>
  );
}
