import { generateQrSvg } from "@/lib/qr";
import styles from "./QrCode.module.css";

export async function QrCode({ data }: { data: string }) {
  const [darkSvg, lightSvg] = await Promise.all([
    generateQrSvg(data, { dark: "#0E1513", light: "#ECEAE3" }),
    generateQrSvg(data, { dark: "#10201B", light: "#FFFFFF" }),
  ]);

  return (
    <div className={styles.stack}>
      <div
        className={styles.dark}
        dangerouslySetInnerHTML={{ __html: darkSvg }}
      />
      <div
        className={styles.light}
        dangerouslySetInnerHTML={{ __html: lightSvg }}
      />
    </div>
  );
}
