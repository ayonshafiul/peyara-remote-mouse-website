import React from "react";
import { Icon } from "@iconify/react";
import styles from "../pages/index.module.css";

/* Phone status bar — signal, Wi-Fi and battery, shared by the app mocks */
export default function StatusBar() {
  return (
    <span className={styles.dStatusIcons}>
      <Icon icon="lucide:signal" width={10} height={10} />
      <Icon icon="lucide:wifi" width={11} height={11} />
      <Icon icon="lucide:battery-full" width={15} height={15} />
    </span>
  );
}
